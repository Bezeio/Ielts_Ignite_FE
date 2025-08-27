import { Component, OnInit } from "@angular/core";

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  skills: string[];
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Statistic {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  focus = false;
  focus1 = false;

  // Company statistics
  statistics: Statistic[] = [
    {
      icon: "nc-icon nc-favourite-28",
      value: "500+",
      label: "Khách hàng hài lòng",
      color: "danger",
    },
    {
      icon: "nc-icon nc-settings-gear-65",
      value: "1000+",
      label: "Dự án hoàn thành",
      color: "primary",
    },
    {
      icon: "nc-icon nc-time-alarm",
      value: "5+",
      label: "Năm kinh nghiệm",
      color: "info",
    },
    {
      icon: "nc-icon nc-single-02",
      value: "50+",
      label: "Chuyên gia",
      color: "success",
    },
  ];

  // Team members
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      position: "CEO & Founder",
      description:
        "Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, An đã dẫn dắt đội ngũ xây dựng nhiều sản phẩm công nghệ thành công.",
      imageUrl: "assets/img/team/ceo.jpg",
      skills: ["Leadership", "Strategy", "Innovation", "Business Development"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 2,
      name: "Trần Thị Minh",
      position: "CTO",
      description:
        "Chuyên gia công nghệ với kinh nghiệm sâu về kiến trúc hệ thống và phát triển phần mềm quy mô lớn.",
      imageUrl: "assets/img/team/cto.jpg",
      skills: [
        "System Architecture",
        "Cloud Computing",
        "DevOps",
        "Team Management",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Lê Hoàng Phúc",
      position: "Lead Frontend Developer",
      description:
        "Chuyên gia Frontend với đam mê tạo ra những trải nghiệm người dùng tuyệt vời và giao diện hiện đại.",
      imageUrl: "assets/img/team/frontend-lead.jpg",
      skills: ["Angular", "React", "Vue.js", "UI/UX Design"],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 4,
      name: "Phạm Thị Lan",
      position: "Lead Backend Developer",
      description:
        "Chuyên gia Backend với kinh nghiệm xây dựng các hệ thống phân tán và API hiệu suất cao.",
      imageUrl: "assets/img/team/backend-lead.jpg",
      skills: ["Node.js", "Python", "Microservices", "Database Design"],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "Hoàng Văn Đức",
      position: "DevOps Engineer",
      description:
        "Chuyên gia DevOps với kinh nghiệm triển khai và vận hành hệ thống cloud-native.",
      imageUrl: "assets/img/team/devops.jpg",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 6,
      name: "Vũ Thị Hương",
      position: "UI/UX Designer",
      description:
        "Nhà thiết kế sáng tạo với tài năng biến những ý tưởng thành những giao diện đẹp mắt và dễ sử dụng.",
      imageUrl: "assets/img/team/designer.jpg",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  // Our services
  services: Service[] = [
    {
      icon: "nc-icon nc-mobile",
      title: "Phát triển Mobile App",
      description:
        "Tạo ra các ứng dụng di động hiện đại, tối ưu trải nghiệm người dùng trên mọi thiết bị.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "Progressive Web App",
      ],
    },
    {
      icon: "nc-icon nc-laptop",
      title: "Phát triển Web Application",
      description:
        "Xây dựng các ứng dụng web mạnh mẽ, scalable với công nghệ tiên tiến nhất.",
      features: [
        "Frontend Modern",
        "Backend API",
        "Database Design",
        "Cloud Deployment",
      ],
    },
    {
      icon: "nc-icon nc-settings-gear-65",
      title: "DevOps & Cloud Services",
      description:
        "Triển khai và vận hành hệ thống với độ tin cậy cao trên nền tảng cloud.",
      features: [
        "CI/CD Pipeline",
        "Container Orchestration",
        "Monitoring",
        "Security",
      ],
    },
    {
      icon: "nc-icon nc-bulb-63",
      title: "Tư vấn Công nghệ",
      description:
        "Đồng hành cùng doanh nghiệp trong việc chuyển đổi số và áp dụng công nghệ mới.",
      features: [
        "Digital Transformation",
        "Architecture Consulting",
        "Technology Selection",
        "Training",
      ],
    },
  ];

  // Company milestones
  achievements: Achievement[] = [
    {
      year: "2019",
      title: "Thành lập công ty",
      description:
        "TechBlog được thành lập với sứ mệnh mang công nghệ tiên tiến đến với mọi doanh nghiệp.",
    },
    {
      year: "2020",
      title: "Dự án đầu tiên",
      description:
        "Hoàn thành thành công dự án e-commerce đầu tiên với hơn 100,000 người dùng.",
    },
    {
      year: "2021",
      title: "Mở rộng đội ngũ",
      description:
        "Tăng quy mô đội ngũ lên 25+ chuyên gia công nghệ và mở rộng sang các lĩnh vực mới.",
    },
    {
      year: "2022",
      title: 'Giải thưởng "Startup của năm"',
      description:
        'Nhận giải thưởng "Tech Startup of the Year" từ Hiệp hội Công nghệ Việt Nam.',
    },
    {
      year: "2023",
      title: "Quốc tế hóa",
      description:
        "Mở rộng thị trường ra khu vực Đông Nam Á và thiết lập văn phòng tại Singapore.",
    },
    {
      year: "2024",
      title: "Đầu tư Series A",
      description:
        "Hoàn thành vòng gọi vốn Series A trị giá 5 triệu USD để mở rộng quy mô và phát triển sản phẩm mới.",
    },
  ];

  // Core values
  coreValues = [
    {
      icon: "nc-icon nc-diamond",
      title: "Chất lượng",
      description:
        "Cam kết mang đến những sản phẩm công nghệ chất lượng cao nhất.",
    },
    {
      icon: "nc-icon nc-favourite-28",
      title: "Khách hàng là trung tâm",
      description:
        "Đặt sự hài lòng của khách hàng lên hàng đầu trong mọi quyết định.",
    },
    {
      icon: "nc-icon nc-bulb-63",
      title: "Đổi mới sáng tạo",
      description:
        "Không ngừng nghiên cứu và áp dụng những công nghệ tiên tiến nhất.",
    },
    {
      icon: "nc-icon nc-single-02",
      title: "Đội ngũ xuất sắc",
      description: "Xây dựng đội ngũ chuyên nghiệp, tận tâm và có kỹ năng cao.",
    },
  ];

  ngOnInit(): void {
    // Initialize component
  }

  // Utility methods
  getSocialIcon(platform: string): string {
    const iconMap: { [key: string]: string } = {
      facebook: "fa fa-facebook-square",
      twitter: "fa fa-twitter",
      linkedin: "fa fa-linkedin",
      github: "fa fa-github",
    };
    return iconMap[platform] || "fa fa-link";
  }

  getSocialColor(platform: string): string {
    const colorMap: { [key: string]: string } = {
      facebook: "btn-facebook",
      twitter: "btn-twitter",
      linkedin: "btn-linkedin",
      github: "btn-github",
    };
    return colorMap[platform] || "btn-neutral";
  }

  // Animation trigger methods (optional)
  onStatisticHover(index: number): void {
    // Add animation logic if needed
  }

  onServiceHover(index: number): void {
    // Add animation logic if needed
  }
}
