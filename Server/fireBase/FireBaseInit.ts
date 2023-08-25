


const dotenv = require('dotenv');
const admin = require('firebase-admin');
dotenv.config();

const Init = ()=>{
const Auth:any = {
    auth_provider_x509_cert_url:process.env.auth_provider_x509_cert_url,
    auth_uri:process.env.auth_uri,
    client_email:process.env.client_email,
    client_id:process.env.client_id,
    client_x509_cert_url:process.env.client_x509_cert_url,
    private_key:process.env.private_key,
    private_key_id:process.env.private_key_id,
    project_id:process.env.project_id,
    token_uri:process.env.token_uri,
    type:process.env.type,
    universe_domain:process.env.universe_domain,
}
admin.initializeApp({
    credential: admin.credential.cert(Auth)
  });
}

export default Init;
