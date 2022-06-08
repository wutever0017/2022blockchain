import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';
import { JSEncrypt } from 'jsencrypt';

export default function RSApage() {

  // create instance
  //var encrypt = new JSEncrypt();
  const encrypt = new JSEncrypt({default_key_size: 512});
  const privateKey = encrypt.getPrivateKey();
  const publicKey = encrypt.getPublicKey();

  console.log(privateKey);
  console.log(publicKey);
  
  // var publicKey = `
  // -----BEGIN PUBLIC KEY-----
  // MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDfY4u5dRDV7EaGNXfzY4XeS+H0
  // 9ZdKFxp4iXfXBlRZ+XFasMRB7HWvtvvXkezuO1Woh2V2Dq6HDIDVifkrA/V5c9Xg
  // UU1KX70ZqVO9vhTou/qOFV/DBAdvjOkFuVfPFAJCDSKVa2ZlDUq/whB6gPxnCc/n
  // fiENGrQdFQKa2burDQIDAQAB
  // -----END PUBLIC KEY-----`;

  // var privateKey = `
  // -----BEGIN RSA PRIVATE KEY-----
  // MIICXQIBAAKBgQDfY4u5dRDV7EaGNXfzY4XeS+H09ZdKFxp4iXfXBlRZ+XFasMRB
  // 7HWvtvvXkezuO1Woh2V2Dq6HDIDVifkrA/V5c9XgUU1KX70ZqVO9vhTou/qOFV/D
  // BAdvjOkFuVfPFAJCDSKVa2ZlDUq/whB6gPxnCc/nfiENGrQdFQKa2burDQIDAQAB
  // AoGBAKorptDMQNr1dnPeX1XlRqEkpSh5vZoPJ3cTIVuH0tIHlzZC2f5uJuiIOCjr
  // XNXOFV6gZcYdQQ5Xk/0Xcdw209MY14Sv8Q0xZuDUuafzl4l/+lEipSBG7NGm8syk
  // R6PUu1dKuS0+MRHl6Ld3FcCw2LP4q/yGBQK3W/nUyiCydN2BAkEA9WvDgvXvViiG
  // H/nJ+p2AYAyMpAseIcYSy0mA8wc5vS3NAUOS1XlYJOjvFqxjr/VY15N7nJuJObZx
  // AEohRslcuQJBAOkEqAnlkwU2DKL1A2L8Bv66VQ/UVOkUddz7ky2gzU/xQTl8T3w7
  // 75o92hsMLetWFLD0TEiP1BifuZLIUonKXvUCQQDY6m+6366z40txFbGM/grKWi0w
  // jNcMGOrhnM0JgNhqugGZXWV5oy/iJ7OywZm2m07z81ntOJfYV8WW8O5qh22ZAkA8
  // JSuKgmtUaQMR/NQG9K6JiWbzUwcnslRJ2dW/bUYRYGBJikCp/H53/YcSfC5OFEX6
  // 9tPJ1vYT9QZdUL+dOVMRAkApxyl+fHtG6OwgpVMT9K1ugxpampnFcdiQrL/Ulcdb
  // us3WfmlhTXdp5DsFRRo8DzGz1eOwJYaZ4hymz2f7nJ3L
  // -----END RSA PRIVATE KEY-----`;

  encrypt.setPublicKey(publicKey);

  var encrypted = encrypt.encrypt('hello world');

  var decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  var uncrypted = decrypt.decrypt(encrypted);

  return (
    <div>
      <h2>RSA encryption</h2>
      <h3>ciphertext</h3>
      <p>{encrypted}</p>

      <p><b>Copy and paste the above ciphertext into your Golang app</b></p>
      <h3>Plaintext</h3>
      <p>{uncrypted}</p>
    </div>
  )

}