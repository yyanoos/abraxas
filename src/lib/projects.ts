export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "jhin-eye",
    description:
      "175개 정부/공공기관 공지사항을 자동 크롤링하고, 사용자 키워드 기반으로 Telegram 알림을 보내는 플랫폼. Kafka + Outbox 패턴의 이벤트 드리븐 마이크로서비스 아키텍처. 크롤러 실패 시 Claude API로 셀렉터를 자동 복구하는 Self-Healing 시스템 포함.",
    tags: ["Spring Boot", "Kafka", "PostgreSQL", "Selenium", "Redis", "EKS"],
  },
  {
    title: "safety-inspection-ml",
    description:
      "나라장터 안전점검 용역 입찰의 낙찰률을 예측하는 ML 시스템. 2019~2025년 2,631건 데이터로 7개 모델 앙상블(LightGBM, XGBoost, CatBoost 등). Optuna 가중치 최적화, 분위수 회귀 신뢰구간. MAE 0.27%p.",
    tags: ["Python", "LightGBM", "XGBoost", "CatBoost", "Streamlit", "SHAP"],
  },
  {
    title: "attendance",
    description:
      "복지관 회원 출석 관리 웹 시스템. QR/전화번호 체크인, 월별 출석 그리드, 엑셀 내보내기. 멀티테넌트 구조로 여러 센터를 하나의 시스템에서 관리.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "Nginx"],
  },
  {
    title: "tri",
    description:
      "신앙인 매칭 서비스. 일일 후보 추천, Like/응답 시스템, Kakao OAuth 로그인. 백엔드 API + Flutter 모바일 앱 구성.",
    tags: ["Spring Boot", "Flutter", "JWT", "PostgreSQL", "Riverpod"],
  },
  {
    title: "babarian",
    description:
      "변액보험 펀드 변경 조언을 고객에게 전달하는 멀티테넌트 SaaS. 어드바이저가 리치 텍스트 조언을 발송하고, 설계사가 고객 읽음 현황을 추적.",
    tags: ["SaaS", "Multi-tenant"],
  },
  {
    title: "bible-report",
    description:
      "성경 읽기 기록 관리 및 보고서 생성 시스템. 멀티 서비스 구조(회원, API, 프론트엔드).",
    tags: ["Spring Boot", "React", "PostgreSQL"],
  },
];
