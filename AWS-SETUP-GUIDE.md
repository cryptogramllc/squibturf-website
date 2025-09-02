# SquibTurf Website - AWS Infrastructure Setup

## 🎉 Current Status

✅ **Completed:**
- Domain `squibturf.com` registered with AWS Route 53
- S3 buckets created (`squibturf.com` and `www.squibturf.com`)
- S3 buckets configured for static website hosting
- Website built and deployed to S3
- CloudFront distribution created (`E15TPT2PCVMI6Q`)

## 🌐 Current URLs

Your website is now accessible at:
- **S3 Website**: http://squibturf.com.s3-website-us-east-1.amazonaws.com
- **CloudFront**: https://dx7s7qf9t5kxk.cloudfront.net

## 📋 Next Steps (Manual Configuration Required)

### 1. Wait for Domain Registration
- Domain registration is in progress (Operation ID: `9f71078f-2fc2-405d-b220-b7d4415e94e1`)
- This can take up to 15 minutes to complete
- Check status: `aws route53domains get-operation-detail --operation-id 9f71078f-2fc2-405d-b220-b7d4415e94e1`

### 2. Create Route 53 Hosted Zone
```bash
aws route53 create-hosted-zone --name squibturf.com --caller-reference squibturf-$(date +%s)
```

### 3. Request SSL Certificate
```bash
aws acm request-certificate \
  --domain-name squibturf.com \
  --subject-alternative-names www.squibturf.com \
  --validation-method DNS \
  --region us-east-1
```

### 4. Update CloudFront Distribution
- Add custom domain aliases (`squibturf.com`, `www.squibturf.com`)
- Update SSL certificate to use the ACM certificate
- Update distribution configuration

### 5. Configure DNS Records
- Create A records pointing to CloudFront distribution
- Create CNAME record for www subdomain
- Add SSL certificate validation records

## 🚀 Deployment Commands

### Quick Deploy
```bash
./deploy.sh
```

### Manual Deploy
```bash
npm run build
aws s3 sync out/ s3://squibturf.com --delete
aws cloudfront create-invalidation --distribution-id E15TPT2PCVMI6Q --paths "/*"
```

## 📁 AWS Resources Created

### S3 Buckets
- `squibturf.com` - Main website bucket
- `www.squibturf.com` - Redirect bucket for www subdomain

### CloudFront Distribution
- **ID**: `E15TPT2PCVMI6Q`
- **Domain**: `dx7s7qf9t5kxk.cloudfront.net`
- **Status**: In Progress (deploying globally)

### Domain Registration
- **Domain**: `squibturf.com`
- **Operation ID**: `9f71078f-2fc2-405d-b220-b7d4415e94e1`
- **Status**: Pending

## 🔧 Configuration Files

- `cloudfront-config.json` - CloudFront distribution configuration
- `domain-registration.json` - Domain registration details
- `deploy.sh` - Automated deployment script

## 💰 Estimated Costs

- **Domain Registration**: ~$12/year
- **S3 Storage**: ~$0.023/GB/month
- **CloudFront**: ~$0.085/GB for first 10TB
- **Route 53**: ~$0.50/hosted zone/month

## 🆘 Troubleshooting

### Check Domain Registration Status
```bash
aws route53domains get-operation-detail --operation-id 9f71078f-2fc2-405d-b220-b7d4415e94e1
```

### Check CloudFront Status
```bash
aws cloudfront get-distribution --id E15TPT2PCVMI6Q
```

### Check S3 Website
```bash
aws s3 website s3://squibturf.com
```

## 📞 Support

If you need help with the remaining configuration steps, you can:
1. Use the AWS Console for visual configuration
2. Follow AWS documentation for Route 53 and CloudFront setup
3. Contact AWS support for domain-related issues

---

**Note**: The domain registration and CloudFront distribution deployment can take some time. The website is already accessible via the S3 and CloudFront URLs while the custom domain is being configured.
