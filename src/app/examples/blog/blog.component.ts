import { Component, OnInit } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  imageUrl: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  count: number;
  color: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  focus = false;
  focus1 = false;
  searchQuery = '';
  selectedCategory = 'all';
  currentPage = 1;
  postsPerPage = 6;

  // Sample blog data
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Angular 17: Những tính năng mới đáng chú ý',
      excerpt: 'Khám phá các tính năng mới trong Angular 17 bao gồm standalone components, signals và nhiều cải tiến khác.',
      content: 'Angular 17 mang đến nhiều tính năng mới...',
      author: 'Nguyễn Văn A',
      date: new Date('2024-01-15'),
      category: 'Frontend',
      imageUrl: 'assets/img/blog/angular17.jpg',
      readTime: 8,
      tags: ['Angular', 'Frontend', 'JavaScript'],
      featured: true
    },
    {
      id: 2,
      title: 'Microservices Architecture với Node.js',
      excerpt: 'Hướng dẫn xây dựng kiến trúc microservices hiệu quả sử dụng Node.js và Docker.',
      content: 'Microservices là một pattern...',
      author: 'Trần Thị B',
      date: new Date('2024-01-12'),
      category: 'Backend',
      imageUrl: 'assets/img/blog/microservices.jpg',
      readTime: 12,
      tags: ['Node.js', 'Microservices', 'Docker'],
      featured: true
    },
    {
      id: 3,
      title: 'AI trong phát triển phần mềm',
      excerpt: 'Tìm hiểu cách AI đang thay đổi cách chúng ta phát triển phần mềm và các công cụ hữu ích.',
      content: 'Trí tuệ nhân tạo đang...',
      author: 'Lê Văn C',
      date: new Date('2024-01-10'),
      category: 'AI/ML',
      imageUrl: 'assets/img/blog/ai-development.jpg',
      readTime: 10,
      tags: ['AI', 'Machine Learning', 'Development'],
      featured: false
    },
    {
      id: 4,
      title: 'GraphQL vs REST API: So sánh chi tiết',
      excerpt: 'Phân tích ưu nhược điểm của GraphQL và REST API để lựa chọn phù hợp cho dự án.',
      content: 'GraphQL và REST là hai...',
      author: 'Phạm Thị D',
      date: new Date('2024-01-08'),
      category: 'API',
      imageUrl: 'assets/img/blog/graphql-rest.jpg',
      readTime: 15,
      tags: ['GraphQL', 'REST', 'API'],
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Best Practices 2024',
      excerpt: 'Các thực hành tốt nhất trong DevOps năm 2024 với CI/CD, containerization và monitoring.',
      content: 'DevOps đã trở thành...',
      author: 'Hoàng Văn E',
      date: new Date('2024-01-05'),
      category: 'DevOps',
      imageUrl: 'assets/img/blog/devops.jpg',
      readTime: 11,
      tags: ['DevOps', 'CI/CD', 'Kubernetes'],
      featured: true
    },
    {
      id: 6,
      title: 'Clean Code: Viết code dễ đọc, dễ maintain',
      excerpt: 'Nguyên tắc và kỹ thuật viết Clean Code giúp code dễ đọc, dễ hiểu và dễ bảo trì.',
      content: 'Clean Code là nghệ thuật...',
      author: 'Vũ Thị F',
      date: new Date('2024-01-03'),
      category: 'Best Practices',
      imageUrl: 'assets/img/blog/clean-code.jpg',
      readTime: 9,
      tags: ['Clean Code', 'Best Practices', 'Programming'],
      featured: false
    }
  ];

  categories: Category[] = [
    { id: 1, name: 'all', count: this.blogPosts.length, color: 'primary' },
    { id: 2, name: 'Frontend', count: 1, color: 'info' },
    { id: 3, name: 'Backend', count: 1, color: 'success' },
    { id: 4, name: 'AI/ML', count: 1, color: 'warning' },
    { id: 5, name: 'API', count: 1, color: 'danger' },
    { id: 6, name: 'DevOps', count: 1, color: 'default' },
    { id: 7, name: 'Best Practices', count: 1, color: 'neutral' }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  get featuredPosts(): BlogPost[] {
    return this.blogPosts.filter(post => post.featured).slice(0, 3);
  }

  get filteredPosts(): BlogPost[] {
    let filtered = this.blogPosts;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }

  get paginatedPosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
  }

  onSearch(): void {
    this.currentPage = 1;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getCategoryColor(category: string): string {
    const cat = this.categories.find(c => c.name === category);
    return cat ? cat.color : 'default';
  }
}