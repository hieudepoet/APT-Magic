# ⚡ APT Magic - AI Photo Transformer

APT Magic là một nền tảng web sáng tạo, cho phép người dùng biến đổi ảnh của họ bằng các công nghệ AI tiên tiến. Từ việc khôi phục những kỷ niệm cũ đến việc tạo ra những tác phẩm nghệ thuật độc đáo theo phong cách anime hay cyberpunk, ứng dụng này mang đến một trải nghiệm sáng tạo và đầy cảm hứng với giao diện hiện đại, thân thiện với người dùng.

## ✨ Tính năng đã hoàn thành

*   **✅ Hệ thống xác thực hoàn chỉnh:**
    *   Đăng ký/đăng nhập với AWS Cognito
    *   Xác thực email tự động
    *   Quản lý phiên đăng nhập bảo mật
*   **✅ Thư viện cá nhân:**
    *   Hiển thị thống kê người dùng (projects, likes, followers)
    *   Quản lý dự án với tabs (Saved/Posted)
    *   Grid layout responsive kiểu Instagram
    *   Modal xem chi tiết dự án
*   **✅ Cộng đồng năng động:**
    *   Newfeed với bài đăng từ cộng đồng
    *   Sidebar lọc theo loại biến đổi
    *   Explore grid với trending posts
    *   Rankings top creators theo likes
    *   Tương tác like (UI ready)
*   **✅ Backend hoàn chỉnh:** Supabase database + AWS S3 storage + API routes.

## 🚧 Tính năng đang phát triển

*   **🔄 Đa dạng tính năng biến đổi:**
    *   **Phục hồi ảnh cũ/trắng đen:** Khôi phục độ sắc nét, màu sắc và loại bỏ hư tổn.
    *   **Anime hóa:** Biến ảnh của bạn thành phong cách nghệ thuật anime.
    *   **Cyberpunk hóa:** Thêm hiệu ứng tương lai và neon rực rỡ vào ảnh.
    *   **Gen ảnh theo trend:** Tích hợp sẵn các prompt đang viral trên các nền tảng MXH để biến đổi ảnh của bạn.
    *   **Gen ảnh thẻ:** Tạo ra ảnh thẻ từ ảnh của bạn.
    *   **Ulti HD cho ảnh:** Tăng chất lượng cho bức ảnh của bạn.
*   **🔄 Giao diện biến đổi:** Kéo thả tải ảnh, thanh trượt so sánh "trước và sau".
*   **🔄 AI Backend:** Tích hợp các mô hình AI cho xử lý ảnh.

## 🖼️ Giao diện người dùng (UI)

*   **Trang chủ:** (Tùy chọn, có thể là trang giới thiệu dự án hoặc chuyển hướng trực tiếp đến `Create`).
    <!-- IMAGE_HERE_1: Ảnh trang chủ nếu có -->

*   **Thanh điều hướng (Navbar):**
    Thanh điều hướng với logo APT Magic (flash icon) và ultra-cold theme, tập trung vào tính năng "Create" để khởi đầu hành trình biến đổi ảnh của bạn.
    <!-- IMAGE_HERE_2: Ảnh Navbar -->

*   **Trang tạo ảnh (Create):**
    Nơi bạn chọn loại biến đổi mong muốn (Restore, Anime, Cyberpunk...).
    <!-- IMAGE_HERE_3: Ảnh TransformSelector -->

*   **Giao diện biến đổi chi tiết:**
    Giao diện làm việc cho từng loại biến đổi, bao gồm khu vực tải ảnh, các tùy chọn điều khiển cụ thể, và thanh trượt so sánh kết quả.
    <!-- IMAGE_HERE_4: Ảnh trang biến đổi (ví dụ: Anime) -->

*   **Thư viện cá nhân (Library):**
    Xem lại tất cả các dự án đã thực hiện, kèm theo ảnh gốc và ảnh đã biến đổi.
    <!-- IMAGE_HERE_5: Ảnh ProjectGrid -->

*   **Cộng đồng (Community - Newfeed):**
    Nơi bạn có thể chia sẻ và khám phá các tác phẩm của người dùng khác, được tổ chức rõ ràng bằng các tags theo loại biến đổi.
    <!-- IMAGE_HERE_6: Ảnh CommunityFeed -->

*   **Trang xác thực (Auth):**
    Giao diện đăng nhập/đăng ký thân thiện.
    <!-- IMAGE_HERE_7: Ảnh LoginForm -->
    <!-- IMAGE_HERE_8: Ảnh ProfileCard -->

## 📁 Cấu trúc File (Đã hoàn thành)

Dự án được tổ chức một cách logic để dễ dàng phát triển và mở rộng.

```
/src
  /app                        # ✅ Các trang chính của Next.js (Router)
    /api                      # ✅ Next.js API Routes (Backend logic)
      /users                  # ✅ API quản lý người dùng
        /sync/route.ts        # ✅ Đồng bộ Cognito ↔ Supabase
        /create/route.ts      # ✅ Tạo user sau confirmation
        /projects/route.ts    # ✅ CRUD operations cho projects
      /community              # ✅ API cho cộng đồng
        /posts/route.ts       # ✅ Lấy bài đăng với filtering
        /rankings/route.ts    # ✅ Top creators rankings
    /auth                     # ✅ Trang xác thực tùy chỉnh
    /community                # ✅ Trang newfeed cộng đồng
    /library                  # ✅ Trang thư viện cá nhân
    /create                   # 🔄 Trang tạo và biến đổi ảnh (đang phát triển)
    /layout.tsx               # ✅ Layout gốc với AuthProvider
    /page.tsx                 # ✅ Trang chủ với 6 features
  /components                 # ✅ React Components hoàn chỉnh
    /Common                   # ✅ Components chung
      /Navbar.tsx             # ✅ Navigation với auth state
      /Footer.tsx             # ✅ Footer với team branding
      /Background.tsx         # ✅ 3D particle system
      /UserMenu.tsx           # ✅ Dropdown menu với glassmorphism
      /LoadingSpinner.tsx     # ✅ Loading spinner
    /Community                # ✅ Components cộng đồng
      /CommunityFeed.tsx      # ✅ Main feed container
      /PostCard.tsx           # ✅ Bài đăng với interactions
      /ExploreGrid.tsx        # ✅ Trending posts grid
      /RankingSidebar.tsx     # ✅ Top creators rankings
    /Create                   # 🔄 Components tạo và biến đổi ảnh (đang phát triển)
    /Library                  # ✅ Components thư viện
      /LibraryProfile.tsx     # ✅ User profile với stats
      /ProjectGrid.tsx        # ✅ Projects grid layout
      /ProjectModal.tsx       # ✅ Chi tiết project modal
    /UI                       # ✅ UI components
      /Button.tsx             # ✅ Styled buttons
      /CustomAuthForm.tsx     # ✅ Custom Cognito auth form
      /ImageUpload.tsx        # 🔄 Image upload field
      /Particles.tsx          # ✅ 3D particle system
      /SpotlightCard.tsx      # ✅ Animated effect Card
  /hooks                      # ✅ Custom React hooks
    /useAuth.ts               # ✅ Authentication với Supabase bridge
    /useProjects.ts           # ✅ Projects data management
    /useCommunityPosts.ts     # ✅ Community posts fetching
    /useRankings.ts           # ✅ Rankings data fetching
    /useImageUpload.tsx       # 🔄 Image upload field
    /useUserCreation.ts       # ✅ Insert new user into Supabase
  /lib                        # ✅ Utility functions
    /supabase.ts              # ✅ Supabase client
    /supabase-auth.ts         # ✅ Auth bridge functions
    /supabase-admin.ts        # ✅ Admin client bypasses RLS
    /s3.ts                    # ✅ AWS S3 utilities
    /amplify.ts               # ✅ AWS Amplify utilities
  /styles                     # ✅ Styling
    /globals.css              # ✅ Ultra-cold theme với TailwindCSS
```

## 🛠️ Cách khởi chạy Local

Để khởi chạy dự án này trên môi trường phát triển cục bộ của bạn, hãy làm theo các bước sau:

### Yêu cầu

*   Node.js (phiên bản 18 trở lên)
*   npm hoặc Yarn
*   Tài khoản AWS (cho S3 và Cognito)
*   Tài khoản Supabase (cho database)
*   OGL library (cho 3D particle system)
*   Modal AI xử lý ảnh (đang phát triển với AWS SageMaker và AWS EC2)

### Các bước

1.  **Clone repository:**

    ```bash
    git clone [URL_CỦA_REPOSITORY_CỦA_BẠN]
    cd photo-genAI-ui
    ```

2.  **Cài đặt các dependency:**

    ```bash
    npm install
    # hoặc
    yarn install
    ```

3.  **Cấu hình biến môi trường:**

    Tạo một file `.env.local` ở thư mục gốc của dự án và điền các biến môi trường cần thiết. Dưới đây là ví dụ về các biến bạn có thể cần:

    ```env
    # AWS Amplify Configuration
    NEXT_PUBLIC_AWS_REGION="ap-southeast-2"
    NEXT_PUBLIC_AWS_USER_POOL_ID="YOUR_USER_POOL_ID"
    NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID="YOUR_CLIENT_ID"

    # AWS S3 (Để lưu trữ ảnh)
    AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY_ID"
    AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_ACCESS_KEY"
    AWS_REGION="ap-southeast-2"
    AWS_S3_BUCKET_NAME="YOUR_S3_BUCKET_NAME"

    # Supabase Configuration
    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY="YOUR_SERVICE_ROLE_KEY"

    # API Key cho dịch vụ AI xử lý ảnh (đang phát triển)
    AI_TRANSFORM_API_KEY="YOUR_AI_API_KEY"
    AI_TRANSFORM_ENDPOINT_RESTORE="YOUR_AI_API_KEY"
    AI_TRANSFORM_ENDPOINT_ANIME="YOUR_AI_API_KEY"
    AI_TRANSFORM_ENDPOINT_CYBERPUNK="YOUR_AI_API_KEY"
    ```
    *Lưu ý:* Thay thế các giá trị `YOUR_...` bằng thông tin thực tế của bạn.

4.  **Chạy máy chủ phát triển:**

    ```bash
    npm run dev
    # hoặc
    yarn dev
    ```

5.  **Truy cập ứng dụng:**

    Mở trình duyệt của bạn và truy cập vào `http://localhost:3000`.
