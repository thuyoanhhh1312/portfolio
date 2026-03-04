const sharedContact = {
  phone: '081-683-7690',
  email: 'thuyoanhhh1312@gmail.com',
  location: {
    vi: 'Bình Thạnh, TP. Hồ Chí Minh',
    en: 'Binh Thanh, Ho Chi Minh City',
  },
  githubProject: 'https://github.com/thuyoanhhh1312',
  githubRepo: 'https://github.com/thuyoanhhh1312/OanhNgoc-Smart-Jewelry-Online',
  avatar: '/avatar.png',
}

const profileVI = {
  name: 'Nguyễn Trần Huỳnh Thùy Oanh',
  title: 'Thực tập sinh Kỹ sư Phần mềm',
  headline:
    'Thực tập sinh Phát triển Phần mềm có kinh nghiệm thực hành với React và Node.js/Express (MySQL/SQL). Thành thạo xây dựng RESTful API, xác thực JWT/refresh token và triển khai tính năng end-to-end (CRUD, RBAC, luồng người dùng) với mã nguồn sạch và quy trình cộng tác qua Git.',
}

const profileEN = {
  name: 'Nguyen Tran Huynh Thuy Oanh',
  title: 'Intern Software Developer',
  headline:
    'Intern Software Developer with hands-on experience in React and Node.js/Express (MySQL/SQL). Skilled in building RESTful APIs, JWT/refresh token auth, and shipping end-to-end features (CRUD, RBAC, user flows) with clean code and Git-based collaboration.',
}

const education = [
  {
    school: 'Ho Chi Minh City University of Technology (HUTECH)',
    timeframe: '2022 – Present (Exp. 2026)',
    major: 'Information Technology',
    gpa: '3.60 / 4',
  },
]

const technicalSkills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 82 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'React Router', level: 78 },
      { name: 'HTML5 / CSS3', level: 80 },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'Redux', level: 75 },
      { name: 'React-Redux', level: 75 },
    ],
  },
  {
    category: 'API & Auth',
    items: [
      { name: 'REST APIs', level: 82 },
      { name: 'Axios', level: 80 },
    ],
  },
  {
    category: 'UI',
    items: [
      { name: 'Tailwind CSS', level: 74 },
      { name: 'Ant Design', level: 70 },
      { name: 'Design Handoff (Figma)', level: 68 },
    ],
  },
  {
    category: 'Backend (Familiar)',
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 68 },
      { name: 'MySQL', level: 68 },
    ],
  },
  {
    category: 'Mobile (Familiar)',
    items: [
      { name: 'Flutter', level: 60 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 78 },
      { name: 'Postman', level: 76 },
      { name: 'Figma', level: 68 },
    ],
  },
]

const projectsVI = [
  {
    id: 'smart-jewelry',
    title: 'Ứng dụng web thương mại điện tử',
    caption: 'Portal khách hàng & admin với bảo vệ tuyến đường theo vai trò.',
    tech: ['React', 'Redux', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MySQL', 'JWT', 'Flutter'],
    tags: ['frontend', 'fullstack'],
    github: sharedContact.githubRepo,
    demo: null,
    summary:
      'Xây dựng cổng khách hàng/admin với bảo vệ route theo vai trò, hỗ trợ checkout đa bước và tích hợp REST API backend.',
    highlights: [
      'Quản lý state đăng nhập/giỏ hàng bằng Redux, lưu localStorage để giữ dữ liệu khi checkout hoặc theo dõi đơn.',
      'Thêm Axios interceptors để refresh token & retry request khi API thất bại.',
      'Xây dựng luồng checkout nhiều bước, kiểm tra khuyến mãi và xử lý tồn kho.',
      'Tích hợp PhoBERT để phân loại cảm xúc, gắn nhãn đánh giá hỗ trợ kiểm duyệt.',
      'Triển khai REST endpoints (Express) cho checkout/payment và đồng bộ tính năng Flutter dùng chung API để đảm bảo nhất quán đa nền tảng.',
    ],
  },
]

const projectsEN = [
  {
    id: 'smart-jewelry',
    title: 'Smart Jewelry E-commerce',
    caption: 'Customer & admin portal with role-based route protection.',
    tech: ['React', 'Redux', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MySQL', 'JWT', 'Flutter'],
    tags: ['frontend', 'fullstack'],
    github: sharedContact.githubRepo,
    demo: null,
    summary:
      'Built customer/admin portals with role-based guards, multi-step checkout, and REST APIs on Node.js/Express/MySQL.',
    highlights: [
      'Stateful auth/cart with Redux + localStorage persistence for checkout and orders.',
      'Axios interceptors for token refresh and request retry on failed API calls.',
      'Multi-step checkout with promo validation and inventory-aware ordering flow.',
      'Integrated PhoBERT sentiment classification to label reviews and support moderation insights.',
      'Delivered REST endpoints for checkout/payment plus Flutter features consuming the same APIs for consistency.',
    ],
  },
]

export const content = {
  vi: {
    profile: { ...profileVI, ...sharedContact, location: sharedContact.location.vi },
    objective:
      'Được tham gia dự án thực tế, cải thiện tốc độ triển khai tính năng frontend/API, học hỏi CI/CD và chuẩn hóa clean code để trở thành Frontend Engineer vững vàng.',
    personal: [
      { label: 'Ngày sinh', value: '13-12-2004' },
      { label: 'Giới tính', value: 'Nữ' },
      { label: 'Địa chỉ', value: sharedContact.location.vi },
      { label: 'Email', value: sharedContact.email, href: `mailto:${sharedContact.email}` },
      { label: 'SĐT', value: sharedContact.phone, href: 'tel:+84816837690' },
    ],
    education,
    languages: [
      { name: 'Tiếng Việt', level: 'Bản ngữ' },
      { name: 'Tiếng Anh', level: 'Trình độ làm việc' },
    ],
    strengths: ['Làm việc nhóm', 'Giao tiếp', 'Giải quyết vấn đề', 'Tính thần trách nhiệm'],
    technicalSkills,
    softSkills: ['Giao tiếp', 'Giải quyết vấn đề', 'Collaboration', 'Ownership', 'Learning agility'],
    projects: projectsVI,
    ui: {
      nav: { home: 'Giới thiệu', resume: 'Hồ sơ', skills: 'Kỹ năng', projects: 'Dự án', contact: 'Liên hệ' },
      hero: {
        heading: 'Xin chào, tôi là',
        ctaProjects: 'Xem dự án',
        ctaDownload: 'Tải CV PDF',
        roleLabel: 'Vai trò',
        gradLabel: 'Tốt nghiệp dự kiến',
        availabilityLabel: 'Thực tập sinh Software Developer',
        availabilityStatus: 'Sẵn sàng thực tập',
        highlightsTitle: 'Tôi mang lại điều gì?',
        highlightsDesc: 'Frontend chắc tay, hiểu REST và auth, quen Git-flow và sẵn sàng bắt nhịp nhanh.',
        highlightCards: [
          { title: 'React + REST thực chiến', desc: 'Portal khách & admin, Axios interceptor refresh token, checkout đa bước, Redux persist.' },
          { title: 'Clean code & teamwork', desc: 'Component hóa, tách dữ liệu, semantic + accessibility cơ bản.' },
          { title: 'Học nhanh & thích nghi', desc: 'Làm việc nhóm, giao tiếp, giải quyết vấn đề, trách nhiệm.' },
        ],
      },
      resume: { title: 'Thông tin chi tiết', desc: 'Từ CV PDF tiếng Việt & tiếng Anh' },
      skills: {
        title: 'Stack & năng lực',
        desc: 'React, Redux, REST API, Tailwind, Ant Design, Node.js/Express, MySQL, Flutter.',
      },
      projects: {
        title: 'Dự án cá nhân',
        desc: '',
        searchPlaceholder: 'Tìm theo tên dự án',
        empty: 'Không tìm thấy dự án phù hợp.',
      },
      contact: {
        title: 'Kết nối với tôi',
        desc: '',
        submit: 'Gửi lời nhắn',
        success: 'Đã gửi thành công (mock) – cảm ơn bạn!',
        labels: { name: 'Họ tên', email: 'Email', subject: 'Tiêu đề', message: 'Nội dung' },
        rules: {
          name: 'Vui lòng nhập tên',
          emailReq: 'Email bắt buộc',
          emailFormat: 'Email chưa đúng định dạng',
          subject: 'Tiêu đề bắt buộc',
          messageReq: 'Nội dung bắt buộc',
          messageMin: 'Nội dung tối thiểu 20 ký tự',
        },
      },
      notFound: { title: 'Không tìm thấy trang', back: 'Về trang chủ' },
    },
  },
  en: {
    profile: { ...profileEN, ...sharedContact, location: sharedContact.location.en },
    objective:
      'Join real-world product teams to ship frontend/API features faster, learn CI/CD, and solidify clean-code habits toward becoming a solid Frontend Engineer.',
    personal: [
      { label: 'Date of birth', value: '13-12-2004' },
      { label: 'Gender', value: 'Female' },
      { label: 'Location', value: sharedContact.location.en },
      { label: 'Email', value: sharedContact.email, href: `mailto:${sharedContact.email}` },
      { label: 'Phone', value: sharedContact.phone, href: 'tel:+84816837690' },
    ],
    education: education.map((e) => ({ ...e, school: e.school, timeframe: e.timeframe, major: e.major, gpa: e.gpa })),
    languages: [
      { name: 'Vietnamese', level: 'Native' },
      { name: 'English', level: 'Working proficiency' },
    ],
    strengths: ['Teamwork', 'Communication', 'Problem-solving', 'Accountability'],
    technicalSkills,
    softSkills: ['Communication', 'Problem-solving', 'Collaboration', 'Ownership', 'Learning agility'],
    projects: projectsEN,
    ui: {
      nav: { home: 'Home', resume: 'Resume', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: {
        heading: 'Hi, I’m',
        ctaProjects: 'View projects',
        ctaDownload: 'Download CV',
        roleLabel: 'Role',
        gradLabel: 'Expected graduation',
        availabilityLabel: 'Software Developer Intern',
        availabilityStatus: 'Available for internship',
        highlightsTitle: 'What I bring',
        highlightsDesc: 'Frontend-ready, REST & auth savvy, comfortable with Git-flow, eager to ramp fast.',
        highlightCards: [
          { title: 'Hands-on React + REST', desc: 'Customer/Admin portals, Axios refresh interceptors, multi-step checkout, Redux persist.' },
          { title: 'Clean code & teamwork', desc: 'Componentization, data separation, semantic & basic accessibility.' },
          { title: 'Fast learner', desc: 'Teamwork, communication, problem-solving, accountability.' },
        ],
      },
      resume: { title: 'Profile details', desc: '' },
      skills: {
        title: 'Stack & capability',
        desc: 'React, Redux, REST API, Tailwind, Ant Design, Node.js/Express, MySQL, Flutter.',
      },
      projects: {
        title: 'Highlighted projects',
        desc: '',
        searchPlaceholder: 'Search by project name',
        empty: 'No matching projects found.',
      },
      contact: {
        title: 'Get in touch',
        desc: '',
        submit: 'Send message',
        success: 'Message sent (mock) – thanks!',
        labels: { name: 'Full name', email: 'Email', subject: 'Subject', message: 'Message' },
        rules: {
          name: 'Please enter your name',
          emailReq: 'Email is required',
          emailFormat: 'Email format is invalid',
          subject: 'Subject is required',
          messageReq: 'Message is required',
          messageMin: 'Message must be at least 20 characters',
        },
      },
      notFound: { title: 'Page not found', back: 'Back to home' },
    },
  },
}
