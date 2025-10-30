# ⚡ APT Magic - AI Photo Transformer

APT Magic là một nền tảng web sáng tạo, cho phép người dùng biến đổi ảnh của họ bằng các công nghệ AI tiên tiến. Từ việc khôi phục những kỷ niệm cũ đến việc tạo ra những tác phẩm nghệ thuật độc đáo theo phong cách anime hay cyberpunk, ứng dụng này mang đến một trải nghiệm sáng tạo và đầy cảm hứng với giao diện hiện đại, thân thiện với người dùng.

**APT Magic được xây dựng với các giải pháp từ AWS (Built on AWS)**

**LƯU Ý QUAN TRỌNG:** README này đang được cập nhật liên tục và phản ánh trạng thái phát triển chưa hoàn thiện của dự án.

Toàn bộ kiến trúc Backend và MLOps được xây dựng trên AWS (Built on AWS) với mô hình Serverless-first để tối ưu hóa chi phí và khả năng mở rộng.

## 🌐 Link Dự Án

| Môi trường             | URL                                      |
|------------------------|------------------------------------------|
| Development/Preview(Vercel)    | [[Webapp](http://apt-magic.vercel.app/)] |
| Production (Sẽ ra mắt) | [SẼ RA MẮT]      |

## 👷 Team phát triển
### Thông tin: [AIVanguard Team](https://apt-magic.vercel.app/about-us)

## 🚀 Kiến Trúc & DevSecOps (Built on AWS)

### 1. Kiến trúc Serverless/Hybrid Tinh Gọn

Kiến trúc tập trung vào việc tách biệt hoàn toàn Logic nghiệp vụ (API) và Xử lý AI nặng (GPU) để tối ưu chi phí (Pay-per-use).

| Lớp Kiến trúc   | Dịch vụ Chính                   | Vai trò                                                                 | Tối ưu                          |
|-----------------|---------------------------------|-------------------------------------------------------------------------|---------------------------------|
| Frontend/Hosting| AWS Amplify Hosting             | Host Next.js SSR, tích hợp CI/CD và CDN.                                | Latency, Tốc độ triển khai.     |
| API Gateway     | API Gateway (HTTP API) + Lambda | Cổng vào API, xác thực (Cognito), và xử lý logic nhẹ.                   | Chi phí thấp, độ trễ API nhỏ (dùng Provisioned Concurrency). |
| Data & Queue    | DynamoDB (On-Demand) + SQS      | DynamoDB cho metadata Job/User. SQS làm hàng đợi bất đồng bộ.           | Khả năng scale, độ tin cậy của Job. |
| Orchestration   | AWS Step Functions              | Quản lý luồng Job AI (gọi SageMaker, xử lý trạng thái, retry).          | Giảm độ phức tạp code, đảm bảo tính nhất quán của Job State. |
| Compute/Worker  | ECS Fargate                     | Worker CPU-bound (Pre-processing, gọi Step Functions).                  | Serverless Container, chỉ trả phí khi Task chạy. |
| AI Inference    | SageMaker Asynchronous Inference| Hosts các mô hình GPU nặng (Restore, Anime, Cyberpunk).                 | Tối ưu Chi phí GPU (Pay-per-use). |
| Storage         | S3 + CloudFront                 | Lưu trữ ảnh và phân phối kết quả với Signed URLs.                       | Độ bền, Low-Latency.            |

### 2. Quy trình DevSecOps (CI/CD)

Chúng tôi sử dụng mô hình Infrastructure as Code (IaC) với AWS CDK/Terraform và các dịch vụ của AWS Developer Tools để tự động hóa toàn bộ quy trình từ Code → Production.

| Quy trình          | Công cụ AWS                      | Chi tiết                                                                 |
|--------------------|----------------------------------|--------------------------------------------------------------------------|
| Frontend CI/CD     | AWS Amplify Hosting              | Tự động build/deploy Next.js từ Git (Branch → Preview, Main → Prod).     |
| Backend CI/CD      | CodePipeline → CodeBuild → CDK/Terraform | Tự động triển khai Lambda/API Gateway/ECS Fargate sau khi Build và Test thành công. |
| MLOps CI/CD        | SageMaker Model Registry         | Tự động hóa quá trình Đào tạo → Đăng ký → Kiểm tra → Triển khai lên SageMaker Endpoint với chiến lược Blue/Green/Canary. |
| Bảo mật Hạ tầng    | AWS WAF, VPC Endpoints           | WAF bảo vệ API/CDN. VPC Endpoints giúp tất cả giao tiếp nội bộ (ECS → S3) diễn ra trên mạng riêng của AWS, tránh chi phí NAT Gateway. |
| Bảo mật Dữ liệu    | Cognito, IAM, S3 SSE-KMS         | IAM Least-Privilege cho mọi Role. S3 SSE-KMS mã hóa dữ liệu. Secrets Manager lưu trữ API keys. |

## ✨ Tính năng đã hoàn thành

✅ Hệ thống xác thực hoàn chỉnh:
- Đăng ký/đăng nhập với AWS Cognito
- Quản lý phiên đăng nhập bảo mật

✅ Thư viện cá nhân:
- Hiển thị thống kê người dùng (projects, likes, followers)
- Quản lý dự án (Saved/Posted)
- Grid layout responsive kiểu Instagram
- Modal xem chi tiết dự án

✅ Cộng đồng năng động:
- Newfeed với bài đăng từ cộng đồng
- Sidebar lọc theo loại biến đổi
- Explore grid với trending posts
- Tương tác like (UI ready)

✅ Migrating Backend: AWS DynamoDB cho metadata & AWS S3 cho lưu trữ ảnh.

## 🚧 Tính năng đang phát triển

🔄 Đa dạng tính năng biến đổi:
- Phục hồi ảnh cũ/trắng đen: (Sử dụng SageMaker Async) Khôi phục độ sắc nét, màu sắc và loại bỏ hư tổn.
- Anime hóa: (Sử dụng SageMaker Async) Biến ảnh của bạn thành phong cách nghệ thuật anime.
- Cyberpunk hóa: (Sử dụng SageMaker Async) Thêm hiệu ứng tương lai và neon rực rỡ vào ảnh.
- Gen ảnh theo trend: (Sử dụng Lambda → Amazon Bedrock/API ngoài) Tích hợp sẵn các prompt đang viral.
- Ulti HD cho ảnh: Tăng chất lượng cho bức ảnh của bạn.

🔄 Giao diện biến đổi: Kéo thả tải ảnh, thanh trượt so sánh "trước và sau".

🔄 AI Backend: Tích hợp các mô hình AI cho xử lý ảnh.

## 📁 Cấu trúc File

Dự án được tổ chức một cách logic để dễ dàng phát triển và mở rộng.

```
/src
  /app                          # API + App Router
    /api                        # API Gateway -> Lambda/ECS Endpoints
      /jobs                     # 🔄 Job submission, status polling
        /submit/route.ts        # Lambda: Handles submission, push to SQS
        /status/[id]/route.ts   # Lambda: Check status from DynamoDB
      /auth                     # Lambda: User sync/management
      /projects                 # Lambda/ECS: CRUD operations for projects
      /community
    /auth                       # Trang xác thực tùy chỉnh
    /community                  # Trang newfeed cộng đồng
    /library                    # Trang thư viện cá nhân
    /create                     # Trang tạo và biến đổi ảnh
    /...
    layout.tsx                  # Layout gốc với AuthProvider
    page.tsx                    # Homepage
  /components                   # Các component UI
    /Create                     # 🔄 Image creation and transformation components
    /...
  /hooks                        # Hooks
    /useJobStatus.ts            # Hook để polling trạng thái Job AI
    /...
  /lib
    /aws-config.ts              # Cấu hình AWS Cognito/Amplify
    /dynamodb.ts                # Utilities cho DynamoDB Client
    /s3-presign.ts              # Tạo Pre-signed URLs cho S3
    /stepfunctions.ts           # Client để gọi Step Functions (nếu cần)
    /...
  /styles                       # Customized CSS files
  middleware.ts                 # Middleware
```

## 🛠️ Cách khởi chạy Local

Để khởi chạy dự án này trên môi trường phát triển cục bộ của bạn, hãy làm theo các bước sau:

### Yêu cầu
- Node.js (phiên bản 18 trở lên)
- npm hoặc Yarn
- Tài khoản AWS (với quyền hạn IAM thích hợp)

### Các bước
1. Clone repository:
   ```
   git clone [URL_CỦA_REPOSITORY_CỦA_BẠN]
   cd apt-magic
   ```

2. Cài đặt các dependency:
   ```
   npm install
   ```

3. Cấu hình biến môi trường:
   Tạo một file `.env.local` ở thư mục gốc của dự án và điền các biến môi trường cần thiết. Lưu ý: Trong môi trường Production, các biến này được quản lý bởi AWS Secrets Manager và AWS CodePipeline.
   ```
   # AWS Amplify/Cognito Configuration
   NEXT_PUBLIC_AWS_REGION="ap-southeast-1"
   NEXT_PUBLIC_AWS_USER_POOL_ID="YOUR_USER_POOL_ID"
   NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID="YOUR_CLIENT_ID"

   # AWS S3 (Sử dụng IAM Role/Keys chỉ cho Dev)
   AWS_REGION="ap-southeast-1"
   AWS_S3_BUCKET_NAME="apt-magic-input-bucket-dev"
   AWS_ACCESS_KEY_ID="YOUR_DEV_ACCESS_KEY_ID"
   AWS_SECRET_ACCESS_KEY="YOUR_DEV_SECRET_ACCESS_KEY"

   # AI Endpoint Configuration
   AI_TRANSFORM_ENDPOINT_RESTORE="YOUR_SAGEMAKER_ENDPOINT_NAME_RESTORE"
   AI_TRANSFORM_ENDPOINT_ANIME="YOUR_SAGEMAKER_ENDPOINT_NAME_ANIME"
   # API Key for third-party service (e.g., Google Gemini/OpenAI - Managed by Secrets Manager in Prod)
   THIRD_PARTY_API_KEY="YOUR_THIRD_PARTY_API_KEY"
   ```

4. Chạy máy chủ phát triển:
   ```
   npm run dev
   ```

5. Truy cập ứng dụng:
   Mở trình duyệt của bạn và truy cập vào http://localhost:3000.

# 🇬🇧 ENGLISH VERSION

# ⚡ APT Magic - AI Photo Transformer

APT Magic is an innovative web platform that allows users to transform their images using cutting-edge AI technologies. From restoring old memories to generating unique artwork in anime or cyberpunk styles, the application delivers an inspiring and creative user experience with a modern, friendly interface.

**IMPORTANT NOTE:** This README is continuously updated and reflects the incomplete development status of the project.

The entire Backend and MLOps architecture is built on AWS (Built on AWS) using a Serverless-first model to optimize cost and scalability.

## 🌐 Project Links

| Environment            | URL                                      |
|------------------------|------------------------------------------|
| Development/Preview(Vercel)    | [[Webapp](http://apt-magic.vercel.app/)]|
| Production (Coming Soon)| [COMING SOON]     |

## 👷 Development team 
### Explore us: [AIVanguard Team](https://apt-magic.vercel.app/about-us)

## 🚀 Architecture & DevSecOps (Built on AWS)

### 1. Simplified Serverless/Hybrid Architecture

The architecture focuses on completely decoupling the Business Logic (API) and Heavy AI Processing (GPU) to ensure cost optimization (Pay-per-use).

| Architecture Layer | Key Service                     | Role                                                                    | Optimization Focus              |
|--------------------|---------------------------------|-------------------------------------------------------------------------|---------------------------------|
| Frontend/Hosting   | AWS Amplify Hosting             | Hosts Next.js SSR, integrates CI/CD and CDN.                            | Latency, Deployment Speed.      |
| API Gateway        | API Gateway (HTTP API) + Lambda | API entry point, authentication (Cognito), and handles lightweight logic.| Low cost, low API latency (using Provisioned Concurrency). |
| Data & Queue       | DynamoDB (On-Demand) + SQS      | DynamoDB for Job/User metadata. SQS for asynchronous job queuing.       | Scalability, Job reliability.   |
| Orchestration      | AWS Step Functions              | Manages the entire AI Job workflow (calling SageMaker, state handling, retries). | Reduced code complexity, Job State consistency. |
| Compute/Worker     | ECS Fargate                     | CPU-bound Workers (Pre-processing, Step Functions initiation).          | Serverless Container, billed only while running. |
| AI Inference       | SageMaker Asynchronous Inference| Hosts heavy GPU models (Restore, Anime, Cyberpunk).                     | GPU Cost Optimization (Pay-per-use). |
| Storage            | S3 + CloudFront                 | Stores images and distributes results with Signed URLs.                 | Durability, Low-Latency delivery.|

### 2. DevSecOps Pipeline (CI/CD)

We use an Infrastructure as Code (IaC) model with AWS CDK/Terraform and AWS Developer Tools to automate the entire process from Code → Production.

| Process               | AWS Tool                        | Detail                                                                  |
|-----------------------|---------------------------------|-------------------------------------------------------------------------|
| Frontend CI/CD        | AWS Amplify Hosting             | Automated Next.js build/deploy from Git (Branch → Preview, Main → Prod).|
| Backend CI/CD         | CodePipeline → CodeBuild → CDK/Terraform | Automated deployment of Lambda/API Gateway/ECS Fargate after successful Build and Test. |
| MLOps CI/CD           | SageMaker Model Registry        | Automates the Training → Registration → Testing → Deployment process to SageMaker Endpoint using Blue/Green/Canary strategies. |
| Infrastructure Security| AWS WAF, VPC Endpoints          | WAF protects API/CDN. VPC Endpoints ensure all internal communication (ECS → S3) stays on the private AWS network, avoiding NAT Gateway costs. |
| Data Security         | Cognito, IAM, S3 SSE-KMS        | IAM Least-Privilege for all Roles. S3 SSE-KMS encrypts data at rest. Secrets Manager stores API keys. |

## ✨ Completed Features

✅ Complete Authentication System:
- Sign-up/Sign-in with AWS Cognito
- Secure session management

✅ Personal Library:
- Displays user statistics (projects, likes, followers)
- Project management (Saved/Posted tabs)
- Responsive Instagram-style grid layout
- Project detail modal

✅ Dynamic Community:
- Newfeed with community posts
- Sidebar filtering by transformation type
- Explore grid with trending posts
- Like interactions (UI ready)

✅ Migrating Backend: AWS DynamoDB for metadata & AWS S3 for image storage.

## 🚧 In Development

🔄 Diverse Transformation Features:
- Old/B&W Photo Restoration: (Using SageMaker Async) Restores sharpness, color, and removes damage.
- Anime Transformation: (Using SageMaker Async) Converts photos into anime art style.
- Cyberpunk Transformation: (Using SageMaker Async) Adds futuristic and neon effects.
- Trend-based Generation: (Using Lambda → Amazon Bedrock/External API) Integrates viral social media prompts.
- Ulti HD for images: Enhances image quality.

🔄 Transformation Interface: Drag-and-drop photo upload, "before & after" comparison slider.

🔄 AI Backend: Integration of AI models for image processing.

## 📁 File Structure

The project is logically organized for development and expansion.

```
/src
  /app                          # API + App Router
    /api                        # API Gateway -> Lambda/ECS Endpoints
      /jobs                     # 🔄 Job submission, status polling
        /submit/route.ts        # Lambda: Handles submission, push to SQS
        /status/[id]/route.ts   # Lambda: Check status from DynamoDB
      /auth                     # Lambda: User sync/management
      /projects                 # Lambda/ECS: CRUD operations for projects
      /community
    /auth                       # Custom authentication pages
    /community                  # Community newfeed page
    /library                    # Personal library page
    /create                     # 🔄 Image creation and transformation page
    /...
    layout.tsx                  # Root Layout with AuthProvider
    page.tsx                    # Homepage
  /components                   # UI components
    /Create                     # 🔄 Image creation and transformation components
    /...
  /hooks                        # Hooks
    /useJobStatus.ts            # 🔄 Hook for polling AI Job status
    /...
  /lib
    /aws-config.ts              # ✅ AWS Cognito/Amplify Configuration
    /dynamodb.ts                # ✅ Utilities for DynamoDB Client
    /s3-presign.ts              # ✅ Generates Pre-signed URLs for S3
    /stepfunctions.ts           # 🔄 Client for calling Step Functions (if needed)
    /...
  /styles                       # Customized CSS files
  middleware.ts                 # Middleware
```

## 🛠️ Local Setup

To run this project in your local development environment, follow these steps:

### Requirements
- Node.js (version 18 or higher)
- npm or Yarn
- AWS Account (with appropriate IAM permissions)

### Steps
1. Clone repository:
   ```
   git clone [YOUR_REPOSITORY_URL]
   cd apt-magic
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the project root and fill in the necessary environment variables. Note: In the Production environment, these variables are managed by AWS Secrets Manager and AWS CodePipeline.
   ```
   # AWS Amplify/Cognito Configuration
   NEXT_PUBLIC_AWS_REGION="ap-southeast-1"
   NEXT_PUBLIC_AWS_USER_POOL_ID="YOUR_USER_POOL_ID"
   NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID="YOUR_CLIENT_ID"

   # AWS S3 (Using IAM Role/Keys for Dev only)
   AWS_REGION="ap-southeast-1"
   AWS_S3_BUCKET_NAME="apt-magic-input-bucket-dev"
   AWS_ACCESS_KEY_ID="YOUR_DEV_ACCESS_KEY_ID"
   AWS_SECRET_ACCESS_KEY="YOUR_DEV_SECRET_ACCESS_KEY"

   # AI Endpoint Configuration
   AI_TRANSFORM_ENDPOINT_RESTORE="YOUR_SAGEMAKER_ENDPOINT_NAME_RESTORE"
   AI_TRANSFORM_ENDPOINT_ANIME="YOUR_SAGEMAKER_ENDPOINT_NAME_ANIME"
   # API Key for third-party service (e.g., Google Gemini/OpenAI - Managed by Secrets Manager in Prod)
   THIRD_PARTY_API_KEY="YOUR_THIRD_PARTY_API_KEY"
   ```

4. Run development server:
   ```
   npm run dev
   ```

5. Access the application:
   Open your browser and navigate to http://localhost:3000.
