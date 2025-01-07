import cognitoConfig from "../config/cognitoConfig";
import {CognitoUserPool,CognitoUser,AuthenticationDetails,} from "amazon-cognito-identity-js"



const userPool = new CognitoUserPool({
    UserPoolId: cognitoConfig.UserPoolId,
    ClientId: cognitoConfig.ClientId,
  })


export const signUp =(name,email,password)=>{
    return new Promise((resolve,reject)=>{
        const attributeList = [
            {
              Name: "email", 
              Value: email,
            },
            {
              Name: "name", 
              Value: name,
            },
          ];
        userPool.signUp(
            email, 
            password,
            attributeList,
            null,
            (err,result)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(result.user);
            }
        )

    });
}

export const signIn = (email,password)=>{
    return new Promise((resolve,reject)=>{
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })
        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) =>{
                console.log('login result: ',result);
                resolve(result);
            },
            onFailure: (err)=>{
                reject(err);
            }
        })

    })
}

export const confirmSignUp =(email,code) =>{
    return new Promise((resolve, reject) =>{
        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool
        });
        cognitoUser.confirmRegistration(code, true, (err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}

export const resendConfirmationCode = (email)=>{
    return new Promise((resolve, reject) =>{
        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool
        });
        cognitoUser.resendConfirmationCode((err,result) =>{
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}

export const signOut = ()=>{
    const cognitoUser = userPool.getCurrentUser();
    console.log('cognitoUser logout-----------',cognitoUser);
    if(cognitoUser){
        cognitoUser.signOut();
    }
}

export function getSession() {
    const cognitoUser = userPool.getCurrentUser();
  
    return new Promise((resolve, reject) => {
      if (!cognitoUser) {
        reject(new Error("No user found"));
        return;
      }
  
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err);
          return;
        }

        console.log('session.isValid()',session.isValid())
  
        if (!session.isValid()) {
          reject(new Error("Session has expired"));
          return;
        }
  
        resolve(session);
      });
    });
  }
  


  export async function getCurrentUser() {
    return new Promise((resolve, reject) => {
      const cognitoUser = userPool.getCurrentUser()
  
      if (!cognitoUser) {
        reject(new Error("No user found"))
        return
      }
  
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err)
          return
        }
        cognitoUser.getUserAttributes((err, attributes) => {
          if (err) {
            reject(err)
            return
          }
          const userData = attributes.reduce((acc, attribute) => {
            acc[attribute.Name] = attribute.Value
            return acc
          }, {})
  
          resolve({ ...userData, username: cognitoUser.username })
        })
      })
    })
  }

