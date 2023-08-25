


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
    private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNQYB+pSuhIHmn\n25jY2bBxbxafXRcb2ez550Bi+2RnBajO0seSmFN2FU2hH3m1KOHULsmgy2zouRtT\njVy8hrT8yp+gqklUHaapc0pgT2mAv1cSx8s1gO4Q5aFFldIxkmqNEdMxoxMJ4JQp\n8u0Q03MPijr2+PJLxwhzqJPgQeSOo9+f2iQ+MVxGRWAk1fyLiuOpXDQD1Iu/Eg9I\nM08GGjEXmvfZUemcEpjOWcVgOGr2n94f2PIJdJ4nC/oG3pbEMJotKI4XNxehkAT5\nGAgMtR9UXAJOGFQc1DEB8Xx+dBzEggebXOgznGOluhU2l0yV/F4sJNQoUvMAJs1o\nvHOPuEgRAgMBAAECggEAGJ8aYFbE4IuqPEIB2EVovnqyboR2sK8YF7QvS5BXb2pE\n4SZ0rTebj2cnzEOf0GTqjg7cve6ZDmOiDQhAjxbjoA1YT6gNqsrxwpLjYaE1CS4q\nrkSMMktYg2tgSJ4bvDmRkYGJYYNr1bv8WfnbiTCsNTmCMD0Vp5RlBaa7smOFHL0B\njwWra/mQMo9PTOYltZoc6mgFIKFKm3FempxDUK1y6qZvDMz9lKE01Kw5ELZqw6EO\n8heG/cJm0LX08e1Lp+5ANdaqEG9zsqosnwtK2DctnNIcatvBKPqUasOeSVYuunau\nTTQcnTZnJfhyi13S2oRm0kn9OUxBme0tMz51Lp3PJwKBgQDzT2rqhQOoNrlW2mBE\nKABby6ICpYRW0mainvkYxp2XndtxFg+qcLr9KM/J5yA+MKyjdS0r6ls9gY9cCmcb\nXmn82uBFmgfX5eYHO3Rn0BA3wqodV4896vcmE5H1pAVQ4yzMFVRM7hLagyvPhxCU\n4h+e2liZHsHXU0Hn+C7DznShNwKBgQDX9f9awSxlK8eRQQjKfHVMb8cixmPFE53c\nMUylOiuT65RjopRos1Gy7wRyZeHkUT9UB2nYixFZHtv9xrqLXNs9NOGhCvuhjQEb\nMAWt1P4zMtAnlugKwd5uF8bdwEj83hyxdP1DlUkMNU8yGsd++1Ct+R3VwTX3Ji9h\nuMqAdCMk9wKBgFcbnLR/kJKdnPcqUYK1K4OxwLvf1CRdSV95OMcU/IC2hETVWCB2\nIYvXG6U2OQXq2TPgFJ7/VVEM3G1gUA+tWparKdXhUmOKLDN0prUv+U5tRAgjO+Y4\nA+m+4eempDyUSIp8LGUqateOVJYEzfvvhNCTbVrMdyuG5DaPVPbHKFw7AoGAH4Ti\nwP8imJ18IgII42yovgAuYy/rTc8gIgv78L19sLgYTzZiTKmnSeNCleOyxVzqTjxK\nwXUCkixD1VUU0tQ5l0RJjfSJZzmqKKqomYdVlmlbIfwPX8qNySmlN6YhwO4159x4\nPk3ifGqnZVutNCY/zzRlm1X4p1qmXa/Xtkm8+18CgYEArY7Bpnsp/3+Ch4aB1kfh\nYUjYCnY414+flZ8eBbwE0e8HROtXnloGp0gDq9bFRjieOIqPTz2rS9kO8vYP8V6A\nDTwMXIoJ3i2S2bMxvwI3+nOHqNBHMNNCjy6MaQzBVqe2wK5haX8/k+S6yySahD8I\nkTsUOwu5sDq20LmzvC1bT/U=\n-----END PRIVATE KEY-----\n",
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
