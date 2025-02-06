# Certificate Issuance and Verification DApp of IITK

This DApp allows universities, institutions, or organizations (represented by admins) to issue and verify certificates (such as degrees) on the blockchain. By using blockchain technology, it ensures that certificates cannot be forged or tampered with, providing a trustworthy way for anyone to verify the authenticity of a certificate without involving a third party.

## Features

- **Issuing Certificates:** Admin users can issue certificates to students. These certificates are stored on the blockchain, making them immutable and secure.
  
- **Verifying Certificates:** Anyone can verify the authenticity of a certificate by simply entering the certificate ID. The DApp interacts with the blockchain to confirm the certificate's validity.
  
- **Blockchain Technology:** Certificates are stored on the blockchain, making it impossible to alter or fake them. This guarantees that the certificate records are trustworthy and cannot be tampered with by anyone, including the issuer.

## Technology Stack

- **Frontend:** React.js for building the user interface. It is fast, efficient, and provides a smooth user experience.
  
- **Backend/Smart Contract:** Solidity is used to write the smart contract which is deployed on the Ethereum blockchain or any other compatible blockchain.
  
- **Web3.js:** Web3.js is used to enable communication between the frontend and the Ethereum blockchain, allowing the DApp to read and write data on the blockchain.

- **MetaMask:** MetaMask or any Ethereum-compatible wallet is used to interact with the DApp and manage the user’s Ethereum account.


## Usage

### Admin Panel (Issuing Certificates)

1. Connect your MetaMask wallet to the DApp.
2. Enter the details of the student.
3. Click the "Submit" button to store the certificate details on the blockchain.

### Verification Panel (Verifying Certificates)

1. Anyone can enter the certificate ID to verify its authenticity.
2. The DApp will communicate with the blockchain to confirm whether the certificate exists and if it's valid.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
