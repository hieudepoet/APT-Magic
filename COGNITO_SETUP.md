# 🔐 AWS Cognito Setup Guide

## Step 1: Create User Pool

1. **Go to AWS Console** → Cognito → User pools
2. **Create user pool**
3. **Configure sign-in experience:**
   - ✅ Email
   - ✅ Username
   - ❌ Phone number (optional)

4. **Configure security requirements:**
   - Password policy: Default
   - MFA: Optional (No MFA for now)

5. **Configure sign-up experience:**
   - ✅ Enable self-registration
   - ✅ Email verification
   - Required attributes: `email`, `preferred_username`

6. **Configure message delivery:**
   - Email provider: Send email with Cognito (for testing)

7. **Integrate your app:**
   - User pool name: `apt-magic-users`
   - App client name: `apt-magic-web`
   - ❌ Don't generate a client secret

## Step 2: Get Configuration Values

After creating the User Pool, copy these values:

```bash
# From User Pool overview
NEXT_PUBLIC_COGNITO_USER_POOL_ID="us-east-1_xxxxxxxxx"

# From App integration → App clients
NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxx"

# Your AWS region
NEXT_PUBLIC_AWS_REGION="us-east-1"
```

## Step 3: Create .env.local

```bash
cp .env.local.example .env.local
```

Fill in the values from Step 2.

## Step 4: Test Authentication

```bash
npm run dev
```

Visit `http://localhost:3000/auth/signin` to test:
- Sign up with email/password
- Username will be set during registration
- Email verification required

## Features Enabled

✅ **Email/Password Authentication**
✅ **Username setup during registration**  
✅ **Email verification**
✅ **Session management**
✅ **AuthGuard for protected routes**
✅ **User info in Navbar**

## Protected Routes

- `/create` - Requires authentication
- `/library` - Requires authentication
- `/community` - Guest can browse, login required for interactions