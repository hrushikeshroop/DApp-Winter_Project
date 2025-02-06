// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Cert {
    mapping(address => bool) public admins; 
    mapping(uint256 => Certificate) private certificates; 
    mapping(uint256 => bool) private issuedIDs;
    uint256 public numCert; 

    struct Certificate {
        string name;
        string course_no; 
        string grade;
        string date;
    }

    constructor(address[] memory _admins) {
        admins[msg.sender] = true; 
        for (uint256 i = 0; i < _admins.length; i++) {
            admins[_admins[i]] = true;
        }
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Access Denied");
        _;
    }

    modifier newID(uint256 _id) {
        require(!issuedIDs[_id], "A certificate has already been issued with this ID.");
        _;
    }

    function issue(
        uint256 _id,
        string memory _name,
        string memory _course_no, 
        string memory _grade,
        string memory _date
    ) public onlyAdmin newID(_id) {
        certificates[_id] = Certificate(_name, _course_no, _grade, _date);
        issuedIDs[_id] = true; 
        numCert++; 
    }

    
    function getCertificate(uint256 _id)
        public
        view
        returns (
            string memory name,
            string memory course_no, 
            string memory grade,
            string memory date
        )
    {
        Certificate memory cert = certificates[_id];
        return (cert.name, cert.course_no, cert.grade, cert.date);
    }
}
