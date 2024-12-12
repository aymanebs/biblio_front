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

