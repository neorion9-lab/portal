// Initial Mock Data Database
const DEFAULT_CATEGORIES = [
  { id: "all", name: "✨ 전체" },
  { id: "cat_math", name: "📐 수학" },
  { id: "cat_science", name: "🧪 과학" },
  { id: "cat_english", name: "🔤 영어" },
  { id: "cat_coding", name: "💻 코딩/정보" },
  { id: "cat_art", name: "🎨 미술" },
  { id: "cat_music", name: "🎵 음악" },
  { id: "cat_history", name: "📜 사회/역사" },
  { id: "cat_korean", name: "📖 국어" }
];

const DEFAULT_APPS = [
  {
    id: "app_math_frac",
    title: "분수의 덧셈 마스터",
    categoryId: "cat_math",
    subject: "수학",
    gradeLevels: ["1", "2", "3"],
    duration: "10-15분",
    thumbnailUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?w=400&q=80",
    tags: ["분수", "연산", "초등수학"],
    description: "맛있는 피자와 초코 조각들을 직접 쪼개고 더해보며 자연스럽게 분수의 개념을 깨치는 인터랙티브 수학교육 앱이올시다!",
    favorite: true
  },
  {
    id: "app_sci_solar",
    title: "우주 대탐험 3D",
    categoryId: "cat_science",
    subject: "과학",
    gradeLevels: ["3", "4", "5"],
    duration: "20-30분",
    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    tags: ["태양계", "행성", "3D시뮬레이션"],
    description: "태양부터 아득한 명왕성까지, 광활한 태양계의 행성들을 눈앞에서 보듯 생생하게 비주얼로 배우고 탐험해보는 최고급 과학 교구앱이다구마이!",
    favorite: false
  },
  {
    id: "app_eng_vocab",
    title: "영어 단어 팡팡 퍼즐",
    categoryId: "cat_english",
    subject: "영어",
    gradeLevels: ["1", "2"],
    duration: "5-10분",
    thumbnailUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
    tags: ["영어", "기초단어", "낱말맞추기"],
    description: "떨어지는 글자 블록들을 이어서 그림에 맞는 영어 단어를 완성하면 점수가 팡팡 터져요! 신나게 단어를 암기해봐요.",
    favorite: true
  },
  {
    id: "app_coding_block",
    title: "액션가면 블록코딩",
    categoryId: "cat_coding",
    subject: "정보",
    gradeLevels: ["4", "5", "6"],
    duration: "15-20분",
    thumbnailUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    tags: ["코딩", "블록코딩", "알고리즘"],
    description: "액션가면이 악당들을 물리치고 전진할 수 있도록 조작 블록들을 조립해보아요! 알고리즘의 기초를 자연스럽게 배웁니다.",
    favorite: false
  },
  {
    id: "app_art_draw",
    title: "꼬마 화가의 디지털 캔버스",
    categoryId: "cat_art",
    subject: "미술",
    gradeLevels: ["1", "2", "3", "4", "5", "6"],
    duration: "20-30분",
    thumbnailUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    tags: ["그리기", "색칠놀이", "디지털아트"],
    description: "붓, 연필, 스프레이, 스티커 등 다양한 툴로 나만의 환상적인 예술 작품을 그리고 포트폴리오에 등록해서 공유해봐요!",
    favorite: false
  },
  {
    id: "app_music_piano",
    title: "화면속의 오케스트라",
    categoryId: "cat_music",
    subject: "음악",
    gradeLevels: ["1", "2", "3"],
    duration: "10-15분",
    thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80",
    tags: ["악기연주", "건반", "박자연습"],
    description: "건반을 가볍게 탭하며 여러 악기의 소리를 융합하고, 간단한 동요부터 클래식 명곡까지 리듬에 맞추어 마스터해봅니다.",
    favorite: false
  },
  {
    id: "app_history_time",
    title: "조선시대 타임레이서",
    categoryId: "cat_history",
    subject: "사회/역사",
    gradeLevels: ["5", "6"],
    duration: "20-25분",
    thumbnailUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
    tags: ["역사", "조선", "인물탐구"],
    description: "이순신 장군님과 세종대왕님을 직접 만나서 임무를 해결하고 조선시대 역사 흐름을 재미있는 퀘스트로 정복해봐요!",
    favorite: false
  },
  {
    id: "app_kor_read",
    title: "문해력 쑥쑥 독서 퀴즈",
    categoryId: "cat_korean",
    subject: "국어",
    gradeLevels: ["1", "2", "3"],
    duration: "10-15분",
    thumbnailUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
    tags: ["독서", "낱말", "문해력"],
    description: "흥미진진한 구연동화를 듣고 주제 찾기 퀴즈와 단어 짝맞추기 문제를 풀며 탄탄한 국어 문해력을 갖추어봅니다.",
    favorite: false
  }
];

const DEFAULT_LESSONS = [
  {
    id: "lp_101",
    title: "단원 3: 분수의 덧셈 기초",
    topic: "피자를 똑같이 나누어 더해볼까요?",
    date: "2026-06-27",
    duration: "40분",
    status: "mapping_in_progress",
    linkedAppIds: ["app_math_frac"],
    target: "분수 개념 이해 및 분모가 같은 분수의 덧셈 원리 체득",
    materials: "피자 인쇄물, 가위, 학습 공책"
  },
  {
    id: "lp_102",
    title: "단원 2: 태양계와 별",
    topic: "태양계 행성 크기 비교 및 순서 알아보기",
    date: "2026-06-28",
    duration: "40분",
    status: "backlog",
    linkedAppIds: [],
    target: "각 행성의 물리적 위치와 크기 관계 파악하기",
    materials: "태양계 포스터, 고무찰흙"
  },
  {
    id: "lp_103",
    title: "단원 1: Hello World!",
    topic: "사물의 영어 단어 매칭 게임",
    date: "2026-06-29",
    duration: "30분",
    status: "mapped",
    linkedAppIds: ["app_eng_vocab"],
    target: "주변 사물의 알파벳 이름 15개 이상 외우기",
    materials: "알파벳 카드"
  }
];

const DEFAULT_STUDENTS = [
  {
    id: "st_01",
    name: "신짱구",
    progress: 45,
    recommendations: ["app_math_frac", "app_coding_block"],
    warning: "초코비 생각에 자주 멍하니 창밖을 봄. 놀라운 창의성을 보임!"
  },
  {
    id: "st_02",
    name: "김철수",
    progress: 90,
    recommendations: ["app_sci_solar"],
    warning: "성실하나 설명충 기질이 다분하여 친구들을 지치게 할 때가 있음."
  },
  {
    id: "st_03",
    name: "한유리",
    progress: 75,
    recommendations: ["app_art_draw"],
    warning: "리얼 소꿉놀이 중 마음에 안 들면 분노를 토해냄. 평화 요망."
  },
  {
    id: "st_04",
    name: "이훈이",
    progress: 30,
    recommendations: ["app_music_piano", "app_kor_read"],
    warning: "주먹밥 머리가 귀여우나 눈물이 너무 많음. 격려 스티커가 필수!"
  },
  {
    id: "st_05",
    name: "맹구",
    progress: 60,
    recommendations: ["app_history_time"],
    warning: "주머니에 늘 특이한 돌멩이가 가득함. 콧물 닦아주기 잊지 말기."
  }
];

const DEFAULT_ASSIGNMENTS = [
  {
    id: "as_01",
    title: "피자 조각으로 분수 덧셈 제출하기",
    dueDate: "2026-06-30",
    status: "진행중",
    linkedAppIds: ["app_math_frac"],
    feedbackUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfbh8x8m8x8-sample1/viewform"
  },
  {
    id: "as_02",
    title: "태양계 가상 궤도 스크린샷 올리기",
    dueDate: "2026-07-02",
    status: "대기",
    linkedAppIds: ["app_sci_solar"],
    feedbackUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfbh8x8m8x8-sample2/viewform"
  },
  {
    id: "as_03",
    title: "기초 단어 퍼즐 10레벨 달성 인증",
    dueDate: "2026-06-28",
    status: "완료",
    linkedAppIds: ["app_eng_vocab"],
    feedbackUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfbh8x8m8x8-sample3/viewform"
  }
];

// App State Management (LocalStorage Integration)
class AppStore {
  constructor() {
    this.apps = this.load("potal_apps", DEFAULT_APPS);
    this.categories = DEFAULT_CATEGORIES; // Static categories for MVP
    this.lessons = this.load("potal_lessons", DEFAULT_LESSONS);
    this.students = this.load("potal_students", DEFAULT_STUDENTS);
    this.assignments = this.load("potal_assignments", DEFAULT_ASSIGNMENTS);
    this.currentRole = this.load("potal_role", "teacher");
  }

  load(key, fallback) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  }

  save(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  saveAll() {
    this.save("potal_apps", this.apps);
    this.save("potal_lessons", this.lessons);
    this.save("potal_students", this.students);
    this.save("potal_assignments", this.assignments);
    this.save("potal_role", this.currentRole);
  }
}

const store = new AppStore();

// UI Elements & State
let currentCategory = "all";
let currentGradeFilter = "all";
let currentSubjectFilter = "all";
let searchQuery = "";
let selectedAppForModal = null;

// DOM Elements Cache
const dom = {
  tabContents: document.querySelectorAll(".tab-content"),
  menuItems: document.querySelectorAll(".menu-item"),
  globalSearch: document.getElementById("global-search"),
  roleSelect: document.getElementById("role-select"),
  userDisplayName: document.getElementById("user-display-name"),
  userDisplayRole: document.getElementById("user-display-role"),
  welcomeTitle: document.getElementById("welcome-title"),
  welcomeSubtitle: document.getElementById("welcome-subtitle"),
  categoryNavBar: document.getElementById("category-nav-bar"),
  appsLauncherGrid: document.getElementById("apps-launcher-grid"),
  filteredAppsCount: document.getElementById("filtered-apps-count"),
  currentCategoryTitle: document.getElementById("current-category-title"),
  todayPlanCount: document.getElementById("today-plan-count"),
  
  // Kanban
  kanbanMiniApps: document.getElementById("kanban-mini-apps"),
  colBacklog: document.getElementById("col-backlog"),
  colMapping: document.getElementById("col-mapping_in_progress"),
  colMapped: document.getElementById("col-mapped"),
  countBacklog: document.getElementById("count-backlog"),
  countMapping: document.getElementById("count-mapping_in_progress"),
  countMapped: document.getElementById("count-mapped"),
  btnAddLesson: document.getElementById("btn-add-lesson"),
  addLessonModal: document.getElementById("add-lesson-modal"),
  addLessonForm: document.getElementById("add-lesson-form"),

  // Students
  studentsPanelGrid: document.getElementById("students-panel-grid"),

  // Assignments
  assignmentsTbody: document.getElementById("assignments-tbody"),
  btnAddAssignment: document.getElementById("btn-add-assignment"),

  // Admin Ingest
  appIngestForm: document.getElementById("app-ingest-form"),

  // Modal Detail
  appPreviewModal: document.getElementById("app-preview-modal"),
  modalAppTitle: document.getElementById("modal-app-title"),
  modalAppThumbnail: document.getElementById("modal-app-thumbnail"),
  modalAppSubject: document.getElementById("modal-app-subject"),
  modalAppDuration: document.getElementById("modal-app-duration"),
  modalAppGrades: document.getElementById("modal-app-grades"),
  modalAppDesc: document.getElementById("modal-app-desc"),
  modalAppTags: document.getElementById("modal-app-tags"),
  modalMapSelect: document.getElementById("modal-map-select"),
  btnModalMap: document.getElementById("btn-modal-map"),
  btnRunApp: document.getElementById("btn-run-app"),
  btnCloseModal: document.getElementById("btn-close-modal"),
  btnCloseModalBottom: document.getElementById("btn-close-modal-bottom"),

  // Simulator
  iframeModal: document.getElementById("iframe-modal"),
  iframeTitle: document.getElementById("iframe-title"),
  iframeSimAppName: document.getElementById("iframe-sim-app-name"),
  btnSimComplete: document.getElementById("btn-sim-complete"),
  btnCloseIframe: document.getElementById("btn-close-iframe"),

  // Policy Modal
  linkTos: document.getElementById("link-tos"),
  linkPrivacy: document.getElementById("link-privacy"),
  policyModal: document.getElementById("policy-modal"),
  policyModalTitle: document.getElementById("policy-modal-title"),
  policyModalContent: document.getElementById("policy-modal-content"),
  btnClosePolicy: document.getElementById("btn-close-policy"),
  btnClosePolicyBottom: document.getElementById("btn-close-policy-bottom"),
  tplTerms: document.getElementById("tpl-terms"),
  tplPrivacy: document.getElementById("tpl-privacy"),

  toastContainer: document.getElementById("toast-container"),
  notiBadge: document.getElementById("noti-badge"),
  notificationTrigger: document.getElementById("notification-trigger"),

  // Ethics Gate
  ethicsGate: document.getElementById("ethics-gate"),
  btnAgreeEthics: document.getElementById("btn-agree-ethics")
};

// ==================== CORE INITIALIZATION ====================
function init() {
  // Setup Role
  dom.roleSelect.value = store.currentRole;
  applyRoleUI(store.currentRole);

  // Bind Sidebar Tab Navigation
  dom.menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = item.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Role switching event
  dom.roleSelect.addEventListener("change", (e) => {
    const newRole = e.target.value;
    store.currentRole = newRole;
    store.saveAll();
    applyRoleUI(newRole);
    showToast(`역할이 [${getRoleLabel(newRole)}] (으)로 변경되었다구마이!`);
    renderAllViews();
  });

  // Search input event
  dom.globalSearch.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderLauncher();
  });

  // Grade Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGradeFilter = btn.getAttribute("data-filter");
      renderLauncher();
    });
  });

  // Subject Filter dropdown
  document.getElementById("subject-filter").addEventListener("change", (e) => {
    currentSubjectFilter = e.target.value;
    renderLauncher();
  });

  // Modal control triggers
  [dom.btnCloseModal, dom.btnCloseModalBottom].forEach(el => {
    el.addEventListener("click", closeModal);
  });
  
  dom.btnModalMap.addEventListener("click", handleModalMapLink);
  dom.btnRunApp.addEventListener("click", runSimulatorApp);
  dom.btnCloseIframe.addEventListener("click", () => dom.iframeModal.classList.remove("open"));
  dom.btnSimComplete.addEventListener("click", handleSimulatedSuccess);

  // Policy Modal Events
  dom.linkTos.addEventListener("click", (e) => {
    e.preventDefault();
    openPolicyModal("서비스 이용약관", dom.tplTerms);
  });
  dom.linkPrivacy.addEventListener("click", (e) => {
    e.preventDefault();
    openPolicyModal("개인정보처리방침", dom.tplPrivacy);
  });
  [dom.btnClosePolicy, dom.btnClosePolicyBottom].forEach(el => {
    el.addEventListener("click", closePolicyModal);
  });
  // Close modal on backdrop click
  window.addEventListener("click", (e) => {
    if (e.target === dom.policyModal) closePolicyModal();
    if (e.target === dom.appPreviewModal) closeModal();
  });

  // Ethics Gate logic
  const gateEl = document.getElementById("ethics-gate");
  const btnAgree = document.getElementById("btn-agree-ethics");
  if (btnAgree && gateEl) {
    btnAgree.addEventListener("click", () => {
      gateEl.style.display = "none";
      showToast("윤리 가이드 확인을 마쳤습니다. 훌륭해요구마이! 🌻");
    });
  }

  // Lesson Plan form
  dom.btnAddLesson.addEventListener("click", () => dom.addLessonModal.classList.add("open"));
  dom.addLessonForm.addEventListener("click", (e) => {
    if (e.target === dom.addLessonModal) dom.addLessonModal.classList.remove("open");
  });
  dom.addLessonForm.addEventListener("submit", handleAddLessonPlanSubmit);

  // Add Assignment Trigger
  dom.btnAddAssignment.addEventListener("click", handleCreateQuickAssignment);

  // Admin Form Submit
  dom.appIngestForm.addEventListener("submit", handleAdminAppIngest);

  // Notification trigger
  dom.notificationTrigger.addEventListener("click", () => {
    showToast("신짱구 선생님: '아이들과 떡잎마을 방범대 전원 출석 완료다구마이!'");
    dom.notiBadge.style.display = "none";
  });

  // Initial render
  renderCategories();
  renderAllViews();
  setupDragAndDrop();
}

// Switch Tabs Dynamic Logic
function switchTab(tabId) {
  dom.menuItems.forEach(item => {
    if (item.getAttribute("data-tab") === tabId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  dom.tabContents.forEach(content => {
    if (content.id === `tab-${tabId}`) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  // Reflow views when navigating to them
  if (tabId === "plan") {
    renderKanbanBoard();
  } else if (tabId === "students") {
    renderStudentsPanel();
  } else if (tabId === "assignments") {
    renderAssignments();
  }
}

// Role Control logic
function applyRoleUI(role) {
  // Update Body class
  document.body.className = `role-${role}`;

  // Update display values
  if (role === "teacher") {
    dom.userDisplayName.textContent = "신짱구 선생님 🌻";
    dom.userDisplayRole.textContent = "교실 관리자 (떡잎유치원)";
    dom.welcomeTitle.textContent = "어서와요! 짱구 선생님 🌻";
    dom.welcomeSubtitle.textContent = "오늘도 아이들과 함께 신나는 수업 계획을 매핑해 보아요!";
  } else if (role === "parent") {
    dom.userDisplayName.textContent = "봉미선 학부모님 🏠";
    dom.userDisplayRole.textContent = "학부모 (읽기 전용)";
    dom.welcomeTitle.textContent = "반갑습니다! 학부모님 🏠";
    dom.welcomeSubtitle.textContent = "자녀의 학급 수업 진도와 개인 맞춤 추천 교육 앱 목록을 열람할 수 있습니다.";
  } else if (role === "student") {
    dom.userDisplayName.textContent = "신짱구 어린이 🎒";
    dom.userDisplayRole.textContent = "떡잎유치원 해바라기반";
    dom.welcomeTitle.textContent = "안녕! 짱구야! 🎒";
    dom.welcomeSubtitle.textContent = "선생님이 추천해 준 재미있는 교육용 앱을 실행해 봐요! 울라울라~";
  }

  // Adjust side navigation items
  if (role === "parent" || role === "student") {
    dom.navAdmin.style.display = "none";
  } else {
    dom.navAdmin.style.display = "flex";
  }

  // Switch to home if role changed and currently on restricted tab
  const activeTab = document.querySelector(".menu-item.active").getAttribute("data-tab");
  if (activeTab === "admin" && (role === "parent" || role === "student")) {
    switchTab("home");
  }
}

function getRoleLabel(role) {
  if (role === "teacher") return "교사";
  if (role === "parent") return "학부모 (읽기 전용)";
  if (role === "student") return "학생 (개인화)";
  return role;
}

// ==================== RENDERING LAUNCHER (HOME) ====================
function renderCategories() {
  dom.categoryNavBar.innerHTML = "";
  store.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `category-tab ${currentCategory === cat.id ? "active" : ""}`;
    btn.textContent = cat.name;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach(tab => tab.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = cat.id;
      renderLauncher();
    });
    dom.categoryNavBar.appendChild(btn);
  });
}

function renderLauncher() {
  dom.appsLauncherGrid.innerHTML = "";

  // Filtering Logic
  const filtered = store.apps.filter(app => {
    // Category filter
    if (currentCategory !== "all" && app.categoryId !== currentCategory) return false;

    // Search query filter
    if (searchQuery) {
      const matchTitle = app.title.toLowerCase().includes(searchQuery);
      const matchTags = app.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      const matchSubject = app.subject.toLowerCase().includes(searchQuery);
      if (!matchTitle && !matchTags && !matchSubject) return false;
    }

    // Grade Level filter
    if (currentGradeFilter !== "all") {
      const grades = currentGradeFilter.split(",");
      const hasIntersection = app.gradeLevels.some(g => grades.includes(g));
      if (!hasIntersection) return false;
    }

    // Subject Filter
    if (currentSubjectFilter !== "all") {
      if (app.subject !== currentSubjectFilter && !(currentSubjectFilter === "예체능" && ["음악", "미술"].includes(app.subject))) {
        return false;
      }
    }

    return true;
  });

  dom.filteredAppsCount.textContent = `조건에 맞는 ${filtered.length}개의 앱이 있습니다.`;
  
  const currentCatObj = store.categories.find(c => c.id === currentCategory);
  dom.currentCategoryTitle.innerHTML = `<i class="fa-solid fa-cubes"></i> ${currentCatObj ? currentCatObj.name : "앱 목록"}`;

  if (filtered.length === 0) {
    dom.appsLauncherGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 48px; background: white; border-radius: 12px; border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 12px;"></i>
        <h4 style="font-weight: 700; margin-bottom: 4px;">찾으시는 교육용 앱이 없어요구마이</h4>
        <p style="font-size: 0.8rem; color: var(--text-secondary);">검색어나 필터링 조건을 다르게 조정해 보세요.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(app => {
    const card = document.createElement("div");
    card.className = `app-card ${app.favorite ? "pinned" : ""}`;
    card.setAttribute("data-app-id", app.id);
    
    // Thumbnail fallback
    const thumbUrl = app.thumbnailUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80";

    card.innerHTML = `
      <div class="app-card-img-wrapper">
        <img src="${thumbUrl}" alt="${app.title}" class="app-card-img" onerror="this.src='https://api.dicebear.com/7.x/identicon/svg?seed=${app.title}'">
        <button class="favorite-toggle ${app.favorite ? "active" : ""}" title="즐겨찾기">
          <i class="fa-${app.favorite ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="app-card-body">
        <div class="app-card-meta">
          <span class="badge primary">${app.subject}</span>
          <span class="badge warning">${app.gradeLevels.map(g => g + '학년').join(', ')}</span>
        </div>
        <h4 class="app-card-title">${app.title}</h4>
        <p class="app-card-desc">${app.description}</p>
        <div class="app-card-footer">
          <span class="app-duration"><i class="fa-regular fa-clock"></i> ${app.duration}</span>
          <button class="btn-card-action">자세히 보기</button>
        </div>
      </div>
    `;

    // Favorite click event
    card.querySelector(".favorite-toggle").addEventListener("click", (e) => {
      e.stopPropagation();
      app.favorite = !app.favorite;
      store.saveAll();
      renderLauncher();
      showToast(app.favorite ? `[${app.title}] 앱을 즐겨찾기에 콕! 등록했다구마이.` : `[${app.title}] 즐겨찾기를 뺐어요.`);
    });

    // Body/Details click
    card.addEventListener("click", () => {
      openAppPreview(app);
    });

    dom.appsLauncherGrid.appendChild(card);
  });
}

// ==================== APP PREVIEW MODAL ====================
function openAppPreview(app) {
  selectedAppForModal = app;
  dom.modalAppTitle.textContent = app.title;
  dom.modalAppThumbnail.src = app.thumbnailUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80";
  dom.modalAppSubject.textContent = app.subject;
  dom.modalAppDuration.textContent = `⏱️ ${app.duration}`;
  dom.modalAppGrades.textContent = `추천 학년: ${app.gradeLevels.map(g => g + '학년').join(', ')}`;
  dom.modalAppDesc.textContent = app.description;

  // Render tags
  dom.modalAppTags.innerHTML = "";
  app.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "modal-tag";
    span.textContent = `#${tag}`;
    dom.modalAppTags.appendChild(span);
  });

  // Populate lessons dropdown for mapping
  dom.modalMapSelect.innerHTML = '<option value="">-- 매핑할 수업 계획 선택 --</option>';
  store.lessons.forEach(lp => {
    const isMapped = lp.linkedAppIds.includes(app.id);
    const suffix = isMapped ? " (이미 연결됨)" : "";
    dom.modalMapSelect.innerHTML += `<option value="${lp.id}">${lp.title}${suffix}</option>`;
  });

  dom.appPreviewModal.classList.add("open");
}

function closeModal() {
  dom.appPreviewModal.classList.remove("open");
  selectedAppForModal = null;
}

function openPolicyModal(title, templateEl) {
  dom.policyModalTitle.textContent = title;
  dom.policyModalContent.innerHTML = templateEl.innerHTML;
  dom.policyModal.classList.add("open");
}

function closePolicyModal() {
  dom.policyModal.classList.remove("open");
}

function handleModalMapLink() {
  if (!selectedAppForModal) return;
  const lessonId = dom.modalMapSelect.value;
  if (!lessonId) {
    showToast("매핑할 수업 계획을 선택해줘요구마이!");
    return;
  }

  const lesson = store.lessons.find(l => l.id === lessonId);
  if (lesson) {
    if (lesson.linkedAppIds.includes(selectedAppForModal.id)) {
      showToast("이미 매핑된 앱이라구마이!");
      return;
    }
    lesson.linkedAppIds.push(selectedAppForModal.id);
    if (lesson.status === "backlog") {
      lesson.status = "mapping_in_progress"; // Advance status
    }
    store.saveAll();
    showToast(`[${selectedAppForModal.title}] 앱을 [${lesson.title}] 수업에 쏙 매핑 완료!`);
    closeModal();
    renderAllViews();
  }
}

// ==================== SIMULATOR EXECUTION ====================
function runSimulatorApp() {
  if (!selectedAppForModal) return;
  const app = selectedAppForModal;
  closeModal();

  dom.iframeSimAppName.textContent = `[${app.title}] 시뮬레이터 실행 중`;
  dom.iframeTitle.textContent = `${app.title} - 가상 Sandbox`;
  dom.iframeModal.classList.add("open");
}

function handleSimulatedSuccess() {
  dom.iframeModal.classList.remove("open");
  showToast(`축하한다구마이! [${dom.iframeSimAppName.textContent.split('[')[1].split(']')[0]}] 학습 미션 완료! 뱃지 획득! 🌟`);
  
  // Dynamic progression simulation for current role
  if (store.currentRole === "student") {
    // Boost Shin-chan progress
    const student = store.students.find(s => s.id === "st_01");
    if (student && student.progress < 100) {
      student.progress = Math.min(100, student.progress + 15);
      store.saveAll();
      renderStudentsPanel();
    }
  }
}

// ==================== KANBAN BOARD & DRAG/DROP ====================
function renderKanbanBoard() {
  // Clear columns
  dom.colBacklog.innerHTML = "";
  dom.colMapping.innerHTML = "";
  dom.colMapped.innerHTML = "";

  // Render Mini library for drag-and-drop
  dom.kanbanMiniApps.innerHTML = "";
  store.apps.forEach(app => {
    const div = document.createElement("div");
    div.className = "mini-app-card";
    div.draggable = true;
    div.setAttribute("data-app-id", app.id);
    div.innerHTML = `
      <div class="mini-app-info">
        <span class="mini-app-title">${app.title}</span>
        <span class="mini-app-subject">${app.subject} • ${app.duration}</span>
      </div>
      <div class="mini-app-drag-handle"><i class="fa-solid fa-grip-vertical"></i></div>
    `;

    // Handle Drag start on mini card
    div.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", app.id);
      e.dataTransfer.effectAllowed = "copy";
    });

    dom.kanbanMiniApps.appendChild(div);
  });

  // Group lessons by status
  let counts = { backlog: 0, mapping_in_progress: 0, mapped: 0 };

  store.lessons.forEach(lesson => {
    const container = getKanbanContainer(lesson.status);
    if (!container) return;

    counts[lesson.status]++;

    const card = document.createElement("div");
    card.className = "lesson-card";
    card.setAttribute("data-lesson-id", lesson.id);

    // Linked Apps DOM
    let linkedHTML = "";
    if (lesson.linkedAppIds.length > 0) {
      lesson.linkedAppIds.forEach(appId => {
        const appObj = store.apps.find(a => a.id === appId);
        if (appObj) {
          linkedHTML += `
            <div class="linked-app-chip" data-app-id="${appObj.id}">
              <span><i class="fa-solid fa-mobile-screen"></i> ${appObj.title}</span>
              <button class="btn-remove-link teacher-only" title="매핑 해제" onclick="removeAppFromLesson('${lesson.id}', '${appObj.id}')">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          `;
        }
      });
    }

    card.innerHTML = `
      <div class="lesson-card-header">
        <h4 class="lesson-card-title">${lesson.title}</h4>
        <span class="lesson-date">${lesson.date}</span>
      </div>
      <p class="lesson-topic"><strong>소주제:</strong> ${lesson.topic}</p>
      
      <div class="mapping-dropzone" data-lesson-id="${lesson.id}">
        ${linkedHTML}
        <div class="mapping-placeholder teacher-only">
          <i class="fa-solid fa-arrow-down-to-bracket"></i> 여기에 앱 드롭
        </div>
      </div>

      <div class="lesson-card-footer">
        <span><i class="fa-solid fa-bullseye"></i> 목표: ${lesson.target}</span>
      </div>

      <div class="lesson-action-bar teacher-only">
        <button class="btn-arrow-action" onclick="moveLesson('${lesson.id}', 'left')"><i class="fa-solid fa-arrow-left"></i> 이전</button>
        <button class="btn-arrow-action" onclick="moveLesson('${lesson.id}', 'right')">다음 <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    `;

    container.appendChild(card);
  });

  // Update status counts
  dom.countBacklog.textContent = counts.backlog;
  dom.countMapping.textContent = counts.mapping_in_progress;
  dom.countMapped.textContent = counts.mapped;

  // Re-bind Drop events to newly rendered dropzones
  setupDropZones();
}

function getKanbanContainer(status) {
  if (status === "backlog") return dom.colBacklog;
  if (status === "mapping_in_progress") return dom.colMapping;
  if (status === "mapped") return dom.colMapped;
  return null;
}

// Drag & Drop bindings
function setupDragAndDrop() {
  // Column-wide drop zones (optional to ease dragging anywhere inside column)
  const columns = document.querySelectorAll(".kanban-cards-container");
  columns.forEach(col => {
    col.addEventListener("dragover", (e) => {
      if (store.currentRole !== "teacher") return;
      e.preventDefault();
      col.classList.add("dragover");
    });
    col.addEventListener("dragleave", () => {
      col.classList.remove("dragover");
    });
    col.addEventListener("drop", (e) => {
      if (store.currentRole !== "teacher") return;
      col.classList.remove("dragover");
      // Find dropped appId
      const appId = e.dataTransfer.getData("text/plain");
      // If we dropped on the column itself, find if we can map to the first lesson card
      const targetColumnStatus = col.parentElement.getAttribute("data-status");
      // Or do nothing if not dropped on specific card. Let's let card dropzone handle it.
    });
  });
}

function setupDropZones() {
  if (store.currentRole !== "teacher") return;
  const dropzones = document.querySelectorAll(".mapping-dropzone");
  dropzones.forEach(zone => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("active");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("active");
    });

    zone.addEventListener("drop", (e) => {
      zone.classList.remove("active");
      const appId = e.dataTransfer.getData("text/plain");
      const lessonId = zone.getAttribute("data-lesson-id");
      
      if (appId && lessonId) {
        mapAppToLesson(lessonId, appId);
      }
    });
  });
}

function mapAppToLesson(lessonId, appId) {
  const lesson = store.lessons.find(l => l.id === lessonId);
  const app = store.apps.find(a => a.id === appId);
  
  if (lesson && app) {
    if (lesson.linkedAppIds.includes(appId)) {
      showToast("이미 매핑되어 있는 앱이라구마이!");
      return;
    }
    
    lesson.linkedAppIds.push(appId);
    // Advance status to mapping if it was backlog
    if (lesson.status === "backlog") {
      lesson.status = "mapping_in_progress";
    }
    
    store.saveAll();
    showToast(`[${app.title}] 앱을 [${lesson.title}] 수업 계획에 매핑했다구마이!`);
    renderAllViews();
  }
}

// Global actions for kanban buttons (called via onclick inline)
window.removeAppFromLesson = function(lessonId, appId) {
  const lesson = store.lessons.find(l => l.id === lessonId);
  if (lesson) {
    lesson.linkedAppIds = lesson.linkedAppIds.filter(id => id !== appId);
    store.saveAll();
    showToast("매핑을 깔끔하게 해제했구마이!");
    renderAllViews();
  }
};

window.moveLesson = function(lessonId, direction) {
  const lesson = store.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const statuses = ["backlog", "mapping_in_progress", "mapped"];
  let currIndex = statuses.indexOf(lesson.status);

  if (direction === "left" && currIndex > 0) {
    lesson.status = statuses[currIndex - 1];
  } else if (direction === "right" && currIndex < statuses.length - 1) {
    lesson.status = statuses[currIndex + 1];
  }

  store.saveAll();
  renderAllViews();
};

function handleAddLessonPlanSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("lesson-title").value;
  const topic = document.getElementById("lesson-topic").value;
  const target = document.getElementById("lesson-target").value;
  const duration = document.getElementById("lesson-duration").value;
  const materials = document.getElementById("lesson-materials").value;

  const newPlan = {
    id: "lp_" + Date.now(),
    title,
    topic,
    date: new Date().toISOString().split('T')[0],
    duration,
    status: "backlog",
    linkedAppIds: [],
    target,
    materials
  };

  store.lessons.push(newPlan);
  store.saveAll();
  
  dom.addLessonModal.classList.remove("open");
  dom.addLessonForm.reset();
  
  showToast("새로운 단원 수업 계획이 대기 보드에 골인! 🎯");
  renderAllViews();
}

// ==================== STUDENTS PANEL VIEW ====================
function renderStudentsPanel() {
  dom.studentsPanelGrid.innerHTML = "";

  store.students.forEach(st => {
    const card = document.createElement("div");
    card.className = "student-card";

    // Build chips
    let chipsHTML = "";
    st.recommendations.forEach(appId => {
      const app = store.apps.find(a => a.id === appId);
      if (app) {
        chipsHTML += `<span class="rec-chip" onclick="openAppPreviewById('${app.id}')">${app.title}</span>`;
      }
    });

    card.innerHTML = `
      <div class="student-card-header">
        <img class="student-avatar" src="https://api.dicebear.com/7.x/adventurer/svg?seed=${st.name}" alt="${st.name}">
        <div class="student-name-group">
          <h4>${st.name}</h4>
          <span>떡잎유치원 해바라기반</span>
        </div>
      </div>
      <div class="progress-section">
        <div class="progress-label-row">
          <span>오늘의 앱 학습 완료율</span>
          <span>${st.progress}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${st.progress}%"></div>
        </div>
      </div>

      <div class="warning-box">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>주의점: ${st.warning}</span>
      </div>

      <div class="student-recs">
        <h5>🎯 추천 학습 앱</h5>
        <div class="rec-chips">
          ${chipsHTML || '<span style="font-size:0.75rem; color:gray">추천된 앱이 아직 없다구마이</span>'}
        </div>
      </div>
    `;

    dom.studentsPanelGrid.appendChild(card);
  });
}

window.openAppPreviewById = function(appId) {
  const app = store.apps.find(a => a.id === appId);
  if (app) openAppPreview(app);
};

// ==================== ASSIGNMENTS TRACKER ====================
function renderAssignments() {
  dom.assignmentsTbody.innerHTML = "";

  store.assignments.forEach(as => {
    const tr = document.createElement("tr");

    // Get linked apps titles
    let appBadges = "";
    as.linkedAppIds.forEach(id => {
      const app = store.apps.find(a => a.id === id);
      if (app) {
        appBadges += `<span class="badge primary" style="margin-right:4px;">${app.title}</span>`;
      }
    });

    const statusBadge = as.status === "완료" 
      ? '<span class="badge success">완료</span>' 
      : (as.status === "진행중" ? '<span class="badge warning">진행중</span>' : '<span class="badge">대기</span>');

    tr.innerHTML = `
      <td class="as-title-cell">${as.title}</td>
      <td class="as-due-cell">${as.dueDate}</td>
      <td>${appBadges || '<span style="color:gray">-</span>'}</td>
      <td>${statusBadge}</td>
      <td>
        <a href="${as.feedbackUrl}" target="_blank" class="feedback-btn">
          <i class="fa-solid fa-comments"></i> 피드백 폼 열기
        </a>
      </td>
      <td class="teacher-only">
        <button class="btn-table-delete" onclick="deleteAssignment('${as.id}')" title="삭제">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;

    dom.assignmentsTbody.appendChild(tr);
  });
}

function handleCreateQuickAssignment() {
  if (store.currentRole !== "teacher") return;
  
  // Prompting simply for ease of demo (with Shin-chan character)
  const title = prompt("과제 제목을 적어주셔요구마이! (예: 태양계 퀴즈 풀기)");
  if (!title) return;

  const newAs = {
    id: "as_" + Date.now(),
    title,
    dueDate: new Date(Date.now() + 3*24*60*60*1000).toISOString().split('T')[0], // 3 days later
    status: "대기",
    linkedAppIds: [],
    feedbackUrl: "https://docs.google.com/forms/sample"
  };

  store.assignments.push(newAs);
  store.saveAll();
  showToast(`[${title}] 과제를 새로 등록했다구마이!`);
  renderAssignments();
}

window.deleteAssignment = function(asId) {
  if (store.currentRole !== "teacher") return;
  if (confirm("정말 이 과제를 삭제하시겠습니까구마이?")) {
    store.assignments = store.assignments.filter(a => a.id !== asId);
    store.saveAll();
    showToast("과제를 삭제했습니다.");
    renderAssignments();
  }
};

// ==================== ADMIN APP INGESTION ====================
function handleAdminAppIngest(e) {
  e.preventDefault();
  
  const title = document.getElementById("ingest-title").value;
  const categoryId = document.getElementById("ingest-category").value;
  const subject = document.getElementById("ingest-subject").value;
  const duration = document.getElementById("ingest-duration").value;
  const description = document.getElementById("ingest-description").value;
  const thumbUrl = document.getElementById("ingest-thumbnail").value;
  const rawTags = document.getElementById("ingest-tags").value;

  // Selected grades
  const checkedGrades = Array.from(document.querySelectorAll('input[name="ingest-grades"]:checked')).map(cb => cb.value);

  if (checkedGrades.length === 0) {
    showToast("최소 하나 이상의 학년을 선택해 주셔요구마이!");
    return;
  }

  const tags = rawTags.split(",").map(t => t.trim()).filter(t => t !== "");

  const newApp = {
    id: "app_" + Date.now(),
    title,
    categoryId,
    subject,
    gradeLevels: checkedGrades,
    duration,
    description,
    thumbnailUrl: thumbUrl || null,
    tags,
    favorite: false
  };

  store.apps.push(newApp);
  store.saveAll();
  
  showToast(`[${title}] 신규 교육용 앱이 카탈로그에 쏙 등록 완료! 울라울라~ 🌟`);
  dom.appIngestForm.reset();

  // Redirect to home/launcher
  switchTab("home");
  renderLauncher();
}

// ==================== TOAST & UTILS ====================
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-bell-ring" style="color:var(--warning-color)"></i> <span>${message}</span>`;
  
  dom.toastContainer.appendChild(toast);
  
  // Auto remove
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function renderAllViews() {
  renderLauncher();
  renderKanbanBoard();
  renderStudentsPanel();
  renderAssignments();
  
  // Today's summary plan stats
  const completedCount = store.lessons.filter(l => l.status === "mapped").length;
  dom.todayPlanCount.textContent = `${completedCount}개 매핑 완료`;
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", init);
window.removeAppFromLesson = removeAppFromLesson;
window.moveLesson = moveLesson;
window.deleteAssignment = deleteAssignment;
window.openAppPreviewById = openAppPreviewById;
