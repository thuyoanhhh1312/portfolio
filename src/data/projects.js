const githubRepo = 'https://github.com/thuyoanhhh1312/OanhNgocSmart-Jewelry-Online'

export const projects = [
  {
    id: 'smart-jewelry',
    title: 'Smart Jewelry E-commerce',
    caption: 'Full-stack commerce web app với checkout đa bước và bảo vệ tuyến đường theo vai trò.',
    tech: ['React', 'Redux', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MySQL', 'JWT'],
    tags: ['frontend', 'fullstack', 'ecommerce'],
    github: githubRepo,
    demo: null,
    summary:
      'Xây dựng portal khách hàng & admin, tích hợp auth JWT/refresh token, thanh toán và quản lý đơn hàng với dữ liệu MySQL.',
    highlights: [
      'Thiết lập state auth/cart với Redux + localStorage để giữ phiên và giỏ hàng bền vững.',
      'Bảo vệ route admin bằng role-based guards và refresh token tự động (Axios interceptor).',
      'Checkout đa bước có kiểm tra tồn kho và validate mã khuyến mãi.',
    ],
  },
  {
    id: 'admin-portal',
    title: 'Role-based Admin Portal',
    caption: 'Module quản trị và kiểm duyệt dành cho đội vận hành.',
    tech: ['React', 'Redux', 'RBAC', 'JWT', 'REST'],
    tags: ['admin', 'security', 'frontend'],
    github: githubRepo,
    demo: null,
    summary:
      'Triển khai bảng điều khiển admin với phân quyền, bảo vệ dữ liệu nhạy cảm và trải nghiệm làm việc ổn định.',
    highlights: [
      'Guard tuyến đường và component-level authorization theo vai trò.',
      'Retry API khi token hết hạn, hạn chế gián đoạn thao tác quản trị.',
      'UI dashboard nhẹ, ưu tiên bảng/biểu lọc nhanh cho kiểm duyệt sản phẩm & đơn hàng.',
    ],
  },
  {
    id: 'review-moderation',
    title: 'PhoBERT Review Moderation',
    caption: 'Tích hợp phân loại cảm xúc để hỗ trợ đội ngũ kiểm duyệt.',
    tech: ['Node.js', 'Express', 'MySQL', 'AI', 'Flutter'],
    tags: ['backend', 'ai', 'integration'],
    github: githubRepo,
    demo: null,
    summary:
      'Kết nối dịch vụ PhoBERT phân loại sentiment, đồng bộ kết quả cho web & app Flutter.',
    highlights: [
      'Endpoint REST phục vụ phân loại review và lưu nhãn để báo cáo.',
      'Hiển thị ghi chú “chưa triển khai demo” cho module AI khi chưa public.',
      'Đảm bảo API dùng chung giữa web React và app Flutter để tái sử dụng.',
    ],
  },
]

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
