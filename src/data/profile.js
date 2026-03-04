export const profile = {
  name: 'Nguyen Tran Huynh Thuy Oanh',
  title: 'Intern Software Developer',
  avatar: '/avatar.png',
  headline:
    'Intern Software Developer với kinh nghiệm thực chiến React & Node.js/Express (MySQL/SQL), xây dựng RESTful APIs, JWT/refresh token auth và triển khai các flow CRUD/RBAC với clean code + Git.',
  location: 'Bình Thạnh, TP. Hồ Chí Minh',
  phone: '081-683-7690',
  email: 'thuyoanhhh1312@gmail.com',
  githubProject: 'https://github.com/thuyoanhhh1312/OanhNgocSmart-Jewelry-Online',
}

export const objective =
  'Được tham gia các dự án sản phẩm thực tế, cải thiện tốc độ shipping tính năng frontend lẫn API, học hỏi quy trình CI/CD và chuẩn hóa clean code để sớm trở thành Frontend Engineer vững vàng.'

export const personal = [
  { label: 'Ngày sinh', value: 'Chưa cung cấp trong CV' },
  { label: 'Giới tính', value: 'Chưa cập nhật' },
  { label: 'Địa chỉ', value: profile.location },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'SĐT', value: profile.phone, href: 'tel:+84816837690' },
]

export const education = [
  {
    school: 'Ho Chi Minh City University of Technology (HUTECH)',
    timeframe: '2022 – Present (Exp. 2026)',
    major: 'Information Technology',
    gpa: '3.60 / 4',
  },
]

export const languages = [
  { name: 'Vietnamese', level: 'Native' },
  { name: 'English', level: 'Working proficiency' },
]

export const strengths = ['Teamwork', 'Communication', 'Problem-solving', 'Accountability']
