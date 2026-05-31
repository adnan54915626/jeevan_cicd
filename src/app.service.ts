import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AWS Cloud Guide</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Segoe UI, sans-serif;
}

body{
  background:#0f172a;
  color:white;
}

header{
  background:#111827;
  padding:20px;
  text-align:center;
  border-bottom:3px solid #ff9900;
}

header h1{
  color:#ff9900;
  font-size:40px;
}

.hero{
  text-align:center;
  padding:60px 20px;
}

.hero h2{
  font-size:42px;
  margin-bottom:15px;
}

.hero p{
  color:#cbd5e1;
  font-size:18px;
}

.services{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
  padding:40px;
}

.card{
  background:#1e293b;
  padding:25px;
  border-radius:15px;
  transition:0.3s;
}

.card:hover{
  transform:translateY(-8px);
  box-shadow:0 0 20px rgba(255,153,0,.4);
}

.card h3{
  color:#ff9900;
  margin-bottom:10px;
}

.roadmap{
  padding:40px;
  text-align:center;
}

.roadmap h2{
  margin-bottom:20px;
  color:#ff9900;
}

.step{
  background:#1e293b;
  margin:10px auto;
  width:350px;
  padding:15px;
  border-radius:10px;
}

.architecture{
  padding:40px;
  text-align:center;
}

.architecture pre{
  background:#111827;
  padding:20px;
  border-radius:10px;
  display:inline-block;
  text-align:left;
}

footer{
  text-align:center;
  padding:20px;
  background:#111827;
  margin-top:40px;
}
</style>
</head>

<body>

<header>
  <h1>☁ AWS Cloud Guide</h1>
</header>

<section class="hero">
  <h2>Master AWS & Cloud Computing</h2>
  <p>Learn AWS Services, DevOps Tools, and Cloud Architecture</p>
</section>

<section class="services">

  <div class="card">
    <h3>🖥 EC2</h3>
    <p>Launch scalable virtual servers in the cloud.</p>
  </div>

  <div class="card">
    <h3>📦 S3</h3>
    <p>Store unlimited files and host static websites.</p>
  </div>

  <div class="card">
    <h3>⚡ Lambda</h3>
    <p>Run code without managing servers.</p>
  </div>

  <div class="card">
    <h3>🔒 IAM</h3>
    <p>Manage users, roles, and permissions.</p>
  </div>

  <div class="card">
    <h3>🌐 Route53</h3>
    <p>Domain registration and DNS routing.</p>
  </div>

  <div class="card">
    <h3>🗄 RDS</h3>
    <p>Managed MySQL, PostgreSQL and Aurora databases.</p>
  </div>

</section>

<section class="roadmap">

<h2>AWS Certification Roadmap</h2>

<div class="step">Cloud Practitioner</div>
<div class="step">Solutions Architect Associate</div>
<div class="step">Developer Associate</div>
<div class="step">SysOps Administrator</div>
<div class="step">DevOps Engineer Professional</div>

</section>

<section class="architecture">

<h2>Sample AWS Architecture</h2>

<pre>
Users
  |
CloudFront
  |
S3 Website
  |
API Gateway
  |
Lambda
  |
DynamoDB
</pre>

</section>

<section class="roadmap">

<h2>DevOps Tools</h2>

<div class="step">🐳 Docker</div>
<div class="step">⚙ Jenkins</div>
<div class="step">☸ Kubernetes</div>
<div class="step">🏗 Terraform</div>

</section>

<footer>
  Built with NestJS 🚀 | AWS Learning Portal
</footer>

</body>
</html>
`;
  }
}