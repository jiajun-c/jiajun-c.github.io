import { useNavigate } from 'react-router-dom';

export default function AboutView() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Contact',
      icon: '📞',
      items: [
        { label: 'Phone', value: '178-0553-2976', icon: '📱' },
        { label: 'Email', value: 'chengjiajun20@gmail.com', icon: '📧' },
        { label: 'GitHub', value: 'https://github.com/jiajun-c', icon: '🔗', link: true },
      ],
    },
    {
      title: 'Education',
      icon: '🎓',
      items: [
        {
          school: '中国科学技术大学 (USTC)',
          period: '2024.9 - Present',
          degree: '计算机系统结构 硕士',
          details: ['ACSA 实验室成员', '科大鸿雁超算队队员'],
        },
        {
          school: '华中科技大学 (HUST)',
          period: '2020.9 - 2024.6',
          degree: '计算机科学与技术 本科',
          details: ['HustLug 骨干成员', '推免至中国科学技术大学'],
        },
      ],
    },
    {
      title: 'Experience',
      icon: '💼',
      items: [
        {
          company: '算秩未来 - AI infra',
          period: '2026.1 - Present',
          details: [
            '对 AI4S 的模型训推阶段的热点 triton 算子进行性能优化',
            '算子实现了 5x 的性能提升，e2e 性能 1.2x',
            '通过无损压缩算法对模型权重进行压缩',
          ],
        },
        {
          company: '百度 - golang 后端开发',
          period: '2023.8 - 2024.2',
          details: [
            '负责百度健康榜单维护，修复地区检索 bug 并支持广告业务',
            '负责内部权限系统开发，衔接外包、审核与管理人员',
          ],
        },
      ],
    },
    {
      title: 'Awards',
      icon: '🏆',
      items: [
        { name: '华为 ICT 大赛鲲鹏 HPC 性能优化挑战赛', level: '一等奖', year: '2025.3' },
        { name: '科学计算软件高性能优化挑战赛', level: '一等奖', year: '2025.11' },
        { name: '计算机设计大赛', level: '省一等奖', year: '2023.9' },
        { name: '龙芯杯 CPU 设计大赛', level: '二等奖', year: '2023.8' },
        { name: '全美大学生数学建模大赛 M 奖', level: '', year: '2022.5' },
        { name: '蓝桥杯 C++ 算法组', level: '国三等奖', year: '2023.5' },
        { name: '昇腾算子挑战赛冠军赛', level: '铜奖', year: '2025.4' },
        { name: 'PAC 并行应用挑战赛', level: '三等奖', year: '2025.8' },
      ],
    },
    {
      title: 'Projects',
      icon: '🚀',
      items: [
        {
          name: 'AtSpMV: 面向 GPU 平台自适应分块稀疏矩阵向量乘法',
          details: [
            '根据稀疏矩阵特征从搜索空间中选择最佳分块形状',
            'GPU 加速负载均衡的计算与矩阵预处理',
            '在 A100 平台上相比官方库最大加速比 10x 以上',
          ],
        },
        {
          name: 'Kota: 面向 linux kde 桌面的个人 AI agent',
          details: [
            '使用 langchain+faiss+deepseek/qwen',
            '支持长期记忆力与短期记忆力',
            '使用 reAct 推理模式，可以调用桌面软件',
          ],
        },
      ],
    },
    {
      title: 'Skills',
      icon: '🔧',
      items: [
        { label: '编程语言', value: 'Triton, CUDA, CUTLASS, Python, AscendC, Golang' },
        { label: '平台', value: 'GPU, ARM CPU, Ascend NPU' },
        { label: '技能', value: 'AI 算子开发，高性能计算，AI agent，模型推理，后端开发' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950">
      {/* 返回按钮 */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-40 group flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-200 shadow-lg hover:shadow-purple-500/10"
      >
        <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-gray-300 group-hover:text-white font-mono text-sm">Back</span>
      </button>

      {/* 头部信息 */}
      <div className="relative pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50 p-8 border border-gray-700/50 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              {/* Arch Linux 图标装饰 */}
              <svg className="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 3.5L18.5 20h-13L12 5.5z"/>
                <path d="M12 6L6 19h12L12 6zm0 2.5L14.5 17h-5L12 8.5z"/>
              </svg>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">程家骏 (Cheng Jiajun)</h1>
                <p className="text-gray-400 mt-1">AI Infra Engineer | HPC Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm p-6 shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300"
            >
              {/* 章节标题 */}
              <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <span>{section.icon}</span>
                {section.title}
              </h2>

              {/* Contact / Skills 类型 */}
              {section.items[0] && 'label' in section.items[0] && !('school' in section.items[0]) && !('company' in section.items[0]) && (
                <div className="space-y-3">
                  {section.items.map((item: any, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="text-cyan-400">{item.icon || '•'}</span>
                      <span className="font-mono">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Education 类型 */}
              {section.items[0] && 'school' in section.items[0] && (
                <div className="space-y-4">
                  {section.items.map((item: any, i) => (
                    <div key={i} className="border-l-2 border-purple-500/30 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-cyan-400">{item.school}</h3>
                        <span className="text-gray-500 font-mono text-sm">{item.period}</span>
                      </div>
                      <p className="text-gray-400 mb-2">{item.degree}</p>
                      {item.details && (
                        <ul className="space-y-1">
                          {item.details.map((detail: string, j) => (
                            <li key={j} className="text-gray-500 text-sm flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Experience 类型 */}
              {section.items[0] && 'company' in section.items[0] && (
                <div className="space-y-4">
                  {section.items.map((item: any, i) => (
                    <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-yellow-400">{item.company}</h3>
                        <span className="text-gray-500 font-mono text-sm">{item.period}</span>
                      </div>
                      {item.details && (
                        <ul className="space-y-1 mt-2">
                          {item.details.map((detail: string, j) => (
                            <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Awards 类型 */}
              {section.items[0] && 'name' in section.items[0] && 'level' in section.items[0] && (
                <div className="grid gap-2">
                  {section.items.map((item: any, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-colors"
                    >
                      <span className="text-gray-300">{item.name}</span>
                      <div className="flex items-center gap-3">
                        {item.level && (
                          <span className="text-pink-400 font-mono text-sm">{item.level}</span>
                        )}
                        <span className="text-gray-500 font-mono text-sm w-16 text-right">{item.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects 类型 */}
              {section.items[0] && 'name' in section.items[0] && 'details' in section.items[0] && (
                <div className="space-y-4">
                  {section.items.map((item: any, i) => (
                    <div key={i} className="border-l-2 border-pink-500/30 pl-4">
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.name}</h3>
                      {item.details && (
                        <ul className="space-y-1">
                          {item.details.map((detail: string, j) => (
                            <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-pink-400 mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 底部装饰 */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-purple-500/50 rounded-full"></span>
              <span className="w-2 h-2 bg-pink-500/50 rounded-full"></span>
              <span className="w-2 h-2 bg-cyan-500/50 rounded-full"></span>
            </div>
            <p className="text-gray-600 font-mono text-sm mt-4">
              End of Resume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
