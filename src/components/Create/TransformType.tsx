//File tạo phụ để tránh lỗi Cannot find Module - Cần sửa sau - Thêm tạm để build
import { ReactNode } from "react";

export type TransformType = {
  /** Tên của tính năng, ví dụ: "Restore Image" */
  name: string;

  /** Mô tả ngắn gọn về tính năng */
  description: string;

  /** Biểu tượng (icon) đại diện cho tính năng, là một component JSX */
  icon: ReactNode;

  /** Chuỗi class CSS của Tailwind để tạo màu nền gradient */
  gradient: string;
};