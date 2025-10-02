---

# 🚀 AI Photo Transformer

AI Photo Transformer là một nền tảng web mạnh mẽ cho phép người dùng biến đổi ảnh của họ bằng các công nghệ AI tiên tiến. Từ việc khôi phục những kỷ niệm cũ đến việc tạo ra những tác phẩm nghệ thuật độc đáo theo phong cách anime hay cyberpunk, ứng dụng này mang đến một trải nghiệm sáng tạo và đầy cảm hứng.

## ✨ Tính năng nổi bật

*   **Đa dạng tính năng biến đổi:**
    *   **Phục hồi ảnh cũ/trắng đen:** Khôi phục độ sắc nét, màu sắc và loại bỏ hư tổn.
    *   **Anime hóa:** Biến ảnh của bạn thành phong cách nghệ thuật anime.
    *   **Cyberpunk hóa:** Thêm hiệu ứng tương lai và neon rực rỡ vào ảnh.
    *   Và nhiều tính năng biến đổi khác sẽ được bổ sung!
*   **Trải nghiệm người dùng trực quan:** Giao diện kéo thả dễ sử dụng, thanh trượt so sánh ảnh "trước và sau".
*   **Thư viện cá nhân:** Lưu trữ và quản lý tất cả các dự án biến đổi ảnh của bạn.
*   **Cộng đồng năng động:** Chia sẻ tác phẩm của bạn với cộng đồng, khám phá và tương tác với các biến đổi của người khác.
*   **Xác thực linh hoạt:** Đăng nhập/đăng ký bằng email/mật khẩu, Google Auth, và tích hợp AWS Cognito.

## 🖼️ Giao diện người dùng (UI)

*   **Trang chủ:** (Tùy chọn, có thể là trang giới thiệu dự án hoặc chuyển hướng trực tiếp đến `Create`).
    <!-- IMAGE_HERE_1: Ảnh trang chủ nếu có -->

*   **Thanh điều hướng (Navbar):**
    Thanh điều hướng đơn giản và rõ ràng, tập trung vào tính năng "Create" để khởi đầu hành trình biến đổi ảnh của bạn.
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

## 📁 Cấu trúc File

Dự án được tổ chức một cách logic để dễ dàng phát triển và mở rộng.

```
/src
  /app                        # Các trang chính của Next.js (Router)
    /api                      # Next.js API Routes (Backend logic)
      /auth                   # Xử lý xác thực người dùng (NextAuth.js)
        /[...nextauth]        # NextAuth catch-all route
      /transform              # API chung cho các loại biến đổi ảnh
        /[type]               # Endpoint động cho từng loại biến đổi (e.g., /api/transform/restore)
      /community              # API cho các bài đăng cộng đồng
      /library                # API cho thư viện cá nhân
    /auth                     # Các trang liên quan đến xác thực (login, signup, profile)
    /community                # Trang hiển thị newfeed cộng đồng
    /library                  # Trang thư viện cá nhân
    /favorites                # Trang các mục yêu thích (sẽ phát triển)
    /create                   # Trang chính cho việc tạo và biến đổi ảnh
      /page.tsx               # Trang chọn loại biến đổi (TransformSelector)
      /[type]/page.tsx        # Trang chi tiết cho từng loại biến đổi (e.g., /create/restore)
    /layout.tsx               # Layout gốc của ứng dụng Next.js
    /page.tsx                 # Trang chủ hoặc trang chuyển hướng
  /components                 # Các React Component tái sử dụng được
    /Auth                     # Components liên quan đến xác thực
      /LoginForm.tsx          # Form đăng nhập
      /SignupForm.tsx         # Form đăng ký
      /ProfileCard.tsx        # Hiển thị thông tin người dùng
      /ChangePasswordForm.tsx # Form đổi mật khẩu
    /Common                   # Components chung cho toàn bộ ứng dụng
      /Navbar.tsx             # Thanh điều hướng trên cùng
      /Footer.tsx             # Chân trang
      /LoadingSpinner.tsx     # Icon tải
      /Button.tsx             # Nút nhấn dùng chung
      /Modal.tsx              # Hộp thoại modal
    /Community                # Components cho tính năng cộng đồng
      /CommunityFeed.tsx      # Container cho newfeed
      /PostCard.tsx           # Hiển thị một bài đăng (kèm tags)
      /CommentSection.tsx     # Khu vực bình luận
    /Library                  # Components cho thư viện cá nhân
      /ProjectCard.tsx        # Hiển thị một dự án (kèm loại biến đổi)
      /ProjectGrid.tsx        # Layout lưới cho các dự án
    /Create                   # Components cho tính năng tạo/biến đổi ảnh
      /TransformSelector.tsx  # Lựa chọn loại biến đổi
      /ImageUploadArea.tsx    # Khu vực tải ảnh
      /BeforeAfterSlider.tsx  # Thanh trượt so sánh ảnh
      /Restore                # Controls riêng cho phục hồi ảnh
        /RestorationControls.tsx
      /Anime                  # Controls riêng cho Anime hóa
        /AnimeControls.tsx
      /Cyberpunk              # Controls riêng cho Cyberpunk hóa
        /CyberpunkControls.tsx
    /UI                       # Các component UI nhỏ, chung
  /lib                        # Các tiện ích và hàm helper
    /auth.ts                  # Hàm hỗ trợ xác thực
    /aws.ts                   # Hàm hỗ trợ AWS (S3, Cognito)
    /utils.ts                 # Các tiện ích chung
    /transformTypes.ts        # Định nghĩa các loại biến đổi ảnh
  /styles                     # Các file CSS
    /globals.css              # Global CSS (TailwindCSS)
  /types                      # Định nghĩa các kiểu TypeScript
    /index.ts                 # Các interface/type chung
```

## 🛠️ Cách khởi chạy Local

Để khởi chạy dự án này trên môi trường phát triển cục bộ của bạn, hãy làm theo các bước sau:

### Yêu cầu

*   Node.js (phiên bản 18 trở lên)
*   npm hoặc Yarn
*   Tài khoản AWS (cho S3 và Cognito)
*   Google Cloud Project (cho Google Auth)
*   Dịch vụ/API xử lý ảnh AI (có thể là của bên thứ 3 hoặc tự triển khai)

### Các bước

1.  **Clone repository:**

    ```bash
    git clone [URL_CỦA_REPOSITORY_CỦA_BẠN]
    cd AI-Photo-Transformer
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
    # NextAuth.js
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="MỘT_CHUỖI_NGẪU_NHIÊN_PHỨC_TẠP_CHO_SECRET" # Sử dụng `openssl rand -base64 32` để tạo

    # Google Provider
    GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
    GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

    # AWS Cognito (Nếu sử dụng)
    COGNITO_CLIENT_ID="YOUR_COGNITO_CLIENT_ID"
    COGNITO_CLIENT_SECRET="YOUR_COGNITO_CLIENT_SECRET"
    COGNITO_ISSUER="https://cognito-idp.YOUR_REGION.amazonaws.com/YOUR_USER_POOL_ID"

    # AWS S3 (Để lưu trữ ảnh)
    AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY_ID"
    AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_ACCESS_KEY"
    AWS_REGION="YOUR_AWS_REGION"
    AWS_S3_BUCKET_NAME="YOUR_S3_BUCKET_NAME"

    # Database (Ví dụ: PostgreSQL)
    DATABASE_URL="postgresql://user:password@host:port/database"

    # API Key cho dịch vụ AI xử lý ảnh (nếu có)
    AI_TRANSFORM_API_KEY="YOUR_AI_API_KEY"
    AI_TRANSFORM_ENDPOINT_RESTORE="http://localhost:5000/restore"
    AI_TRANSFORM_ENDPOINT_ANIME="http://localhost:5000/anime"
    AI_TRANSFORM_ENDPOINT_CYBERPUNK="http://localhost:5000/cyberpunk"
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

---