import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Cpu,
  Database,
  Languages,
  Search,
  BarChart3,
  FileText,
  Boxes,
  Sparkles,
  CheckCircle2,
  Globe,
  Factory,
  Award,
  Workflow,
  Users,
  ArrowRight,
  Lock,
  Wrench,
  MessageSquare,
  BookOpen,
} from 'lucide-react';

const FadeIn: React.FC<React.PropsWithChildren<{ delay?: number }>> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.55, delay }}
  >
    {children}
  </motion.div>
);

const productGroups = [
  {
    title: 'Architectural Glass',
    items: ['Tempered Glass', 'Laminated Glass', 'Insulated Glass', 'Curved Glass', 'Bent Glass', 'U-Profile Glass'],
  },
  {
    title: 'Decorative Glass',
    items: ['Printed Glass', 'Frosted Glass', 'Colored Glass', 'LED Glass'],
  },
  {
    title: 'Safety Glass',
    items: ['Fire-Resistant Glass', 'Bulletproof Glass', 'Wired Glass', 'Anti-Reflective Glass'],
  },
  {
    title: 'Residential & Mirror',
    items: ['Shower Glass', 'Partition Glass', 'Handrail Glass', 'Smart Glass', 'Temperable Mirrors', 'One-Way Mirrors'],
  },
];

const adminModules = [
  { icon: Users, name: '用户系统', desc: '会员、权限、角色、API Key 配额与日志追踪。' },
  { icon: Sparkles, name: '第三方中转大模型', desc: '统一模型路由、计费、限流、回调与可观测性。' },
  { icon: FileText, name: '文件中心 / 博客中心', desc: '文件管理、知识文档、博客内容发布与版本记录。' },
  { icon: Boxes, name: '产品中心', desc: '产品分类、参数模板、OEM/ODM 定制字段管理。' },
  { icon: Languages, name: '多语种管理', desc: '多语言文案、页面翻译、地区化 SEO 配置。' },
  { icon: Search, name: 'SEO 中心', desc: 'Meta、Schema、站点地图、重定向与收录监控。' },
  { icon: BarChart3, name: '统计与表单询盘', desc: '全站流量看板、询盘漏斗、来源渠道分析。' },
  { icon: Lock, name: '整站管理（隐藏后台）', desc: '后台入口隐藏、IP 白名单、双重验证与审计。' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F6FC] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-white/40 bg-[#014B8B]/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-white">
            <img src="/logo.svg" alt="66glass logo" className="h-9 w-9" />
            <div>
              <p className="text-lg font-bold tracking-tight">66glass Global</p>
              <p className="text-xs text-blue-100">OEM / ODM Glass Solution Leader</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#014B8B] transition hover:bg-blue-50"
          >
            Get Proposal
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero-grid relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_1fr]">
            <FadeIn>
              <div className="rounded-3xl border border-white/30 bg-white/88 p-8 shadow-2xl shadow-blue-900/10 lg:p-12">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#014B8B]">
                  <Factory className="h-3.5 w-3.5" /> 全球玻璃深加工制造
                </p>
                <h1 className="mb-5 text-4xl font-extrabold leading-tight text-[#014B8B] lg:text-5xl">
                  面向全球场景的玻璃应用解决方案平台
                </h1>
                <p className="mb-7 text-slate-600 lg:text-lg">
                  前后端分离架构，支持 PostgreSQL 与第三方中转大模型能力，
                  为海外分销商、工业企业与技术服务商提供可规模化的品牌官网 + 业务后台系统。
                </p>
                <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  {['自研研发体系', '严格质量控制', '全球认证资质', '专利技术沉淀'].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 text-[#247FCF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-[#247FCF]/15 bg-white p-8 shadow-xl">
                <h2 className="mb-4 text-xl font-bold text-[#014B8B]">构建框架总览</h2>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex gap-3"><Workflow className="mt-0.5 h-4 w-4 text-[#247FCF]" />宝塔面板 + Node 项目部署（VPS）。</li>
                  <li className="flex gap-3"><Database className="mt-0.5 h-4 w-4 text-[#247FCF]" />PostgreSQL 数据层，支持业务与内容数据统一管理。</li>
                  <li className="flex gap-3"><Cpu className="mt-0.5 h-4 w-4 text-[#247FCF]" />第三方中转大模型接入，支持多模型并行调用。</li>
                  <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-[#247FCF]" />隐藏式后台入口 + 权限策略，确保管理端安全。</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <h2 className="mb-2 text-center text-3xl font-bold text-[#014B8B]">商店定位与产品类别</h2>
              <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600">
                产品矩阵覆盖建筑、装饰、安全、家居及镜面场景，支持品牌标识、包装与技术规格等 OEM/ODM 定制。
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {productGroups.map((group, i) => (
                <FadeIn delay={i * 0.08} key={group.title}>
                  <article className="rounded-2xl border border-[#247FCF]/15 bg-white p-6 shadow-lg shadow-blue-900/5">
                    <h3 className="mb-4 text-xl font-bold text-[#014B8B]">{group.title}</h3>
                    <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#247FCF]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#014B8B] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <h2 className="mb-2 text-center text-3xl font-bold text-white">后台管理模块（隐藏管理端）</h2>
              <p className="mx-auto mb-10 max-w-3xl text-center text-blue-100">
                前后端分离管理体系：业务可视化、内容可运营、安全可审计、模型可治理。
              </p>
            </FadeIn>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {adminModules.map((module, i) => (
                <FadeIn delay={i * 0.05} key={module.name}>
                  <article className="rounded-2xl border border-white/25 bg-white/10 p-5 text-white backdrop-blur-sm">
                    <module.icon className="mb-3 h-6 w-6 text-blue-100" />
                    <h3 className="mb-2 font-bold">{module.name}</h3>
                    <p className="text-sm text-blue-100">{module.desc}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              { icon: Wrench, title: '技术属性', desc: '自主研发 + 全链路质量控制 + 模型能力编排。' },
              { icon: Globe, title: '公司优势', desc: '完整产线、研发团队、全球销售网络、展会经验。' },
              { icon: Award, title: '核心价值', desc: '顶级质量标准 + 全球服务交付 + 定制化能力。' },
            ].map((item, i) => (
              <FadeIn delay={i * 0.08} key={item.title}>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-900/5">
                  <item.icon className="mb-3 h-8 w-8 text-[#247FCF]" />
                  <h3 className="mb-2 text-lg font-bold text-[#014B8B]">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#247FCF] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Ready to Launch Your Industrial Glass Platform?</h2>
              <p className="mb-7 text-blue-100">
                目标客户：海外分销商、工业制造企业、大型零售商、技术解决方案提供商。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#014B8B] hover:bg-blue-50">
                  <MessageSquare className="h-4 w-4" /> 提交询盘需求
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold hover:bg-white/10">
                  <BookOpen className="h-4 w-4" /> 获取方案文档
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} 66glass Global. Built for professional glass manufacturing brands.</p>
      </footer>
    </div>
  );
}
