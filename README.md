```markdown
# AWS 3-Tier Architecture Backend

A production-grade, highly secure 3-tier web architecture deployed on Amazon Web Services (AWS). This project demonstrates cloud infrastructure design principles, network isolation, security group chaining, and backend API integration with a managed database service.

---

## 📐 Architecture Overview

The architecture is divided into three distinct layers across isolated subnets within a custom Virtual Private Cloud (VPC):

```text
[ Internet Gateway ]
         │
  [ Public Subnet ]
  ├── NAT Gateway
  └── (Optional Load Balancer / Ingress)
         │
  [ Private Subnet - Application Tier ]
  └── EC2 Instance (Node.js / Express App)
         │
  [ Private Subnet - Database Tier ]
  └── Amazon RDS (MySQL Managed Database)

```

* **Networking:** Custom VPC configured with Public and Private Subnets across multiple Availability Zones. Outbound internet access for private instances is routed securely via a NAT Gateway.
* **Compute Tier:** Node.js runtime running on an Amazon EC2 instance inside a isolated private subnet with no direct public IP exposure.
* **Database Tier:** Managed Amazon RDS MySQL instance placed in dedicated private database subnets.
* **Security Group Chaining:** Strict ingress and egress firewall rules ensuring traffic flows only sequentially through valid tiers.

---

## 🛠️ Tech Stack

* **Cloud Provider:** Amazon Web Services (AWS VPC, EC2, RDS, NAT Gateway, Security Groups)
* **Runtime / Backend:** Node.js, Express.js
* **Database:** Amazon RDS MySQL
* **Version Control:** Git, GitHub

---

## 🔒 Security Implementation

1. **Zero Public Exposure:** The application server and database reside strictly within private subnets, protected from external internet scanning and direct brute-force attacks.
2. **Least Privilege Firewalls:** Security groups act as stateful firewalls chained explicitly (e.g., Database tier accepts port `3306` ingress exclusively from the Application Security Group ID).
3. **Secret Isolation:** Database credentials and runtime environments are injected using local environment files (`.env`), explicitly excluded from source control via `.gitignore`.

---

## 📂 Project Structure

```text
aws-3tier-architecture/
├── .gitignore          # Ignores .env and node_modules/
├── package.json        # Application dependencies and scripts
├── package-lock.json   # Exact dependency tree lockfile
└── server.js           # Main Node.js application server & database connection logic

```

---

## 🚀 Environment Variables Setup

To run this backend application, create a `.env` file in the root directory with your target database connection details:

```env
PORT=3000
DB_HOST=your-rds-endpoint.amazonaws.com
DB_USER=admin
DB_PASSWORD=your_secure_password
DB_NAME=threetierdb

```

---

## 🗺️ Roadmap & DevOps Progression

* [x] Provision core VPC, subnets, NAT Gateway, and Security Groups manually via AWS Console.
* [x] Deploy Node.js Express app on private EC2 host and establish RDS MySQL connectivity.
* [x] Push clean repository to GitHub with credential protection.
* [ ] Containerize application runtime using **Docker**.
* [ ] Automate full infrastructure provisioning using **Terraform** (IaC).
* [ ] Deploy and orchestrate application containers on **Kubernetes (EKS)**.

---

## 👤 Author

**Suman Ali Khan**

*DevOps & Cloud Engineering Student*

* [GitHub](https://www.google.com/search?q=https://github.com/Sumaanalikhan)

```

```
