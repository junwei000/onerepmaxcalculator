export const locales = {
  en: { name: 'English', flag: '🇺🇸', htmlLang: 'en', path: '/' },
  'zh-CN': { name: '中文', flag: '🇨🇳', htmlLang: 'zh-CN', path: '/zh-CN' },
  ko: { name: '한국어', flag: '🇰🇷', htmlLang: 'ko', path: '/ko' },
  ja: { name: '日本語', flag: '🇯🇵', htmlLang: 'ja', path: '/ja' },
  de: { name: 'Deutsch', flag: '🇩🇪', htmlLang: 'de', path: '/de' },
  fr: { name: 'Français', flag: '🇫🇷', htmlLang: 'fr', path: '/fr' },
  es: { name: 'Español', flag: '🇪🇸', htmlLang: 'es', path: '/es' },
} as const

export type Locale = keyof typeof locales

export const translations = {
  en: {
    meta: {
      title: 'One Rep Max Calculator | Free 1RM Strength Calculator',
      description: 'Calculate your One Rep Max (1RM) instantly with Brzycki, Epley, and Lombardi formulas. Free percentage breakdown table for powerlifting, CrossFit, and strength training.',
      keywords: 'one rep max calculator, 1rm calculator, one rep max, 1rm, strength calculator, powerlifting, weightlifting, brzycki formula',
    },
    hero: {
      badge: 'Free Online Tool',
      title: 'One Rep Max Calculator',
      subtitle: 'Instantly estimate your maximum strength with science-backed formulas. Get a full percentage breakdown to power your training.',
      cta: 'Calculate My 1RM',
    },
    nav: {
      whatIs: 'What is 1RM',
      howTo: 'How to Use',
      whoNeeds: 'Who Needs It',
      faq: 'FAQ',
    },
    calculator: {
      title: 'Calculate Your One Rep Max',
      subtitle: 'Enter your lift details to estimate your 1RM strength.',
      liftLabel: 'Lift Type',
      weightLabel: 'Lift Weight',
      repsLabel: 'Repetitions',
      calculateBtn: 'Calculate 1RM',
      recalculateBtn: 'Recalculate 1RM',
      results: {
        title: 'Estimated One Rep Max',
        analysis: 'Analysis',
        formulaLabel: 'Based on',
        percentageCol: 'Percentage',
        weightCol: 'Weight',
        repsCol: 'Est. Reps',
        emptyTitle: 'Ready to Calculate',
        emptyDesc: 'Enter your lift details above to generate your strength report.',
      },
    },
    whatIs: {
      title: 'What is a One Rep Max Calculator?',
      paragraphs: [
        'A one rep max calculator is an essential tool that estimates the maximum weight you can lift for a single repetition of any exercise. Your 1RM, or one rep max, represents your absolute strength ceiling — the heaviest load your muscles can manage with proper form for one complete rep.',
        'Instead of testing your actual one rep max in the gym (which carries real injury risk), a one rep max calculator uses proven mathematical formulas to estimate this number based on lighter weights you can lift for multiple reps. The most widely used formulas include the Brzycki Formula (ideal for bench press), the Epley Formula (effective for squats), and the Lombardi Formula (preferred for deadlifts).',
        'Understanding your 1RM forms the foundation of effective strength training programming. Most evidence-based programs prescribe loads as a percentage of your one rep max — for example, 75% of 1RM for hypertrophy work, or 85%+ for peak strength adaptations. Without knowing your number, programming is just guesswork.',
      ],
    },
    howTo: {
      title: 'How to Use a One Rep Max Calculator?',
      subtitle: 'Three simple steps to unlock your strength data.',
      steps: [
        {
          number: '01',
          title: 'Choose your lift & unit',
          desc: 'Select the exercise type — bench press, squat, deadlift, or general lifts. Pick your preferred weight unit (kg or lb).',
        },
        {
          number: '02',
          title: 'Enter weight & reps',
          desc: 'Input the weight you lifted and the number of reps you completed. Best accuracy comes from sets of 1–5 reps with near-maximal effort.',
        },
        {
          number: '03',
          title: 'Read your 1RM & train smarter',
          desc: 'Your estimated 1RM and a full percentage table appear instantly. Use the table to program every set — from 50% recovery work to 95% strength peaks.',
        },
      ],
    },
    whoNeeds: {
      title: 'Who Needs a One Rep Max Calculator?',
      subtitle: 'From beginners to elite athletes — anyone serious about strength training benefits from knowing their numbers.',
      items: [
        {
          title: 'Powerlifters',
          desc: 'Track progress on squat, bench, and deadlift without maxing out every session. Plan your peaking cycle around precise percentages.',
        },
        {
          title: 'CrossFit Athletes',
          desc: 'Scale heavy barbell work intelligently within conditioning programs. Know your percentages for barbell complexes and heavy singles.',
        },
        {
          title: 'Bodybuilders',
          desc: 'Anchor your hypertrophy phases to real strength data. Use 65–85% 1RM ranges to drive muscle growth with progressive overload.',
        },
        {
          title: 'Beginners',
          desc: 'Establish a strength baseline early. A calculated 1RM gives beginners a reference point to measure progress week over week.',
        },
        {
          title: 'Strength Coaches',
          desc: 'Prescribe individualized loads for every athlete in your group. One 1RM test drives an entire training cycle of percentage-based programming.',
        },
        {
          title: 'Weightlifters',
          desc: 'Apply percentage-based loading to the snatch and clean & jerk. Track relative strength gains across mesocycles without constant max attempts.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about one rep max and how to use this calculator.',
      items: [
        {
          question: 'How accurate is this One Rep Max Calculator?',
          answer: 'This calculator uses proven formulas — Brzycki for general lifts and bench press, Epley for squats, and Lombardi for deadlifts. Accuracy is highest when using sets of 1–5 reps. Beyond 10 reps, muscular endurance becomes a factor and estimates are less reliable. Always treat the result as an estimate and adjust based on your performance.',
        },
        {
          question: 'What rep range gives the most accurate 1RM estimate?',
          answer: 'The most accurate estimates come from 1–5 rep efforts at near-maximal intensity. As repetitions increase beyond 10, formula accuracy decreases because endurance factors play a larger role. For best results, use a weight you can lift for 3–6 reps with solid technique.',
        },
        {
          question: 'Can I use this for any exercise?',
          answer: 'Yes, but it works best for compound barbell lifts like squats, bench press, and deadlifts. Isolation exercises (such as bicep curls) may not scale as predictably because muscle fatigue patterns differ. The lift-specific formulas significantly improve accuracy for the three major powerlifts.',
        },
        {
          question: 'Is it safe to test my true 1RM?',
          answer: 'Testing a true 1RM places significant stress on your joints and central nervous system. Always ensure you have proper form, a spotter present, and have completed progressive warm-up sets. For most people, estimating 1RM from a submaximal effort using this calculator is a safer and equally useful approach.',
        },
        {
          question: 'How often should I recalculate my 1RM?',
          answer: 'Recalculate every 4–8 weeks, or at the end of a training block. Strength adapts quickly in beginners (recalculate more often) and more slowly in advanced lifters. A new 1RM estimate lets you update training loads and continue making progress.',
        },
      ],
    },
    cta: {
      title: 'Ready to Train with Precision?',
      subtitle: 'Use your One Rep Max to stop guessing and start programming. Every set, every rep — dialed in.',
      button: 'Calculate My 1RM Now',
    },
  },

  'zh-CN': {
    meta: {
      title: '1RM计算器 | 免费一次最大重量测算工具',
      description: '使用布里兹基、爱普利和伦巴第公式即时计算您的1RM（一次最大重量）。免费百分比分解表，适用于力量举、CrossFit和力量训练。',
      keywords: '1RM计算器, 一次最大重量计算器, 1rm计算器, 力量训练, 卧推最大重量, 深蹲最大重量, 硬拉最大重量, 力量举',
    },
    hero: {
      badge: '免费在线工具',
      title: '1RM 计算器',
      subtitle: '使用科学公式即时估算您的最大力量，获取完整的训练百分比分解数据。',
      cta: '计算我的1RM',
    },
    nav: {
      whatIs: '什么是1RM',
      howTo: '使用方法',
      whoNeeds: '适用人群',
      faq: '常见问题',
    },
    calculator: {
      title: '计算您的一次最大重量',
      subtitle: '输入举重数据以估算您的1RM力量。',
      liftLabel: '举重类型',
      weightLabel: '重量',
      repsLabel: '重复次数',
      calculateBtn: '计算1RM',
      recalculateBtn: '重新计算',
      results: {
        title: '预估一次最大重量',
        analysis: '分析',
        formulaLabel: '使用公式',
        percentageCol: '百分比',
        weightCol: '重量',
        repsCol: '预计次数',
        emptyTitle: '准备计算',
        emptyDesc: '在上方输入举重数据以生成力量报告。',
      },
    },
    whatIs: {
      title: '什么是 1RM 计算器？',
      paragraphs: [
        '一次最大重量计算器（1RM计算器）是估算您单次举起最大重量的重要工具。您的1RM代表绝对力量上限——您的肌肉在保持正确姿势的情况下，完成一次完整动作所能承受的最大负荷。',
        '与其在健身房冒着受伤风险测试真实最大重量，不如使用1RM计算器，通过您能多次完成的较轻重量来估算。最广泛使用的公式包括布里兹基公式（适合卧推）、爱普利公式（适合深蹲）和伦巴第公式（适合硬拉）。',
        '了解您的1RM是制定有效力量训练计划的基础。大多数循证训练计划都以1RM百分比来规定负荷——例如75%用于肌肥大训练，85%以上用于峰值力量适应。没有这个数字，训练计划就只是猜测。',
      ],
    },
    howTo: {
      title: '如何使用 1RM 计算器？',
      subtitle: '三个简单步骤，解锁您的力量数据。',
      steps: [
        {
          number: '01',
          title: '选择动作和单位',
          desc: '选择运动类型——卧推、深蹲、硬拉或一般举重，然后选择重量单位（千克或磅）。',
        },
        {
          number: '02',
          title: '输入重量和次数',
          desc: '输入您举起的重量和完成的次数。使用1–5次的接近最大努力可获得最准确的估算。',
        },
        {
          number: '03',
          title: '读取1RM，智能训练',
          desc: '您的预估1RM和完整百分比表会立即显示。从50%恢复训练到95%峰值力量，用百分比规划每一组训练。',
        },
      ],
    },
    whoNeeds: {
      title: '谁需要使用 1RM 计算器？',
      subtitle: '从初学者到精英运动员——任何认真对待力量训练的人都能从了解自己的数字中受益。',
      items: [
        {
          title: '力量举运动员',
          desc: '在不每次尝试最大重量的情况下追踪深蹲、卧推和硬拉的进步。围绕精确百分比规划备赛周期。',
        },
        {
          title: 'CrossFit运动员',
          desc: '在以体能为主的训练中智能调整杠铃训练。了解杠铃复合动作和重单次训练的百分比。',
        },
        {
          title: '健美运动员',
          desc: '将肌肥大阶段锚定于真实力量数据。使用65–85%的1RM范围通过渐进超负荷促进肌肉生长。',
        },
        {
          title: '初学者',
          desc: '早期建立力量基准。计算出的1RM为初学者提供每周衡量进步的参考点。',
        },
        {
          title: '力量教练',
          desc: '为团队中的每位运动员制定个性化训练负荷。一次1RM测试可以驱动整个训练周期的百分比编程。',
        },
        {
          title: '举重运动员',
          desc: '将百分比负荷应用于抓举和挺举。在多个训练周期中追踪相对力量增长，无需频繁进行最大尝试。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      subtitle: '关于一次最大重量及如何使用本计算器的所有问题解答。',
      items: [
        {
          question: '这个一次最大重量计算器有多准确？',
          answer: '本计算器使用经过验证的公式——一般举重和卧推使用布里兹基公式，深蹲使用爱普利公式，硬拉使用伦巴第公式。使用1–5次组时准确性最高。超过10次后，肌肉耐力成为影响因素，估算精度会下降。请始终将结果视为估算值，并根据实际表现进行调整。',
        },
        {
          question: '哪个次数范围能给出最准确的1RM估算？',
          answer: '以接近最大努力的1–5次重复可获得最准确的估算。当重复次数超过10次时，由于耐力因素的介入，公式准确性会降低。为获得最佳结果，请使用您能以正确技术完成3–6次的重量。',
        },
        {
          question: '我可以对任何动作使用这个计算器吗？',
          answer: '可以，但它最适合深蹲、卧推和硬拉等复合杠铃动作。孤立动作（如弯举）因肌肉疲劳模式不同，可能不能与这些公式完全匹配。针对特定动作的公式能显著提高三大力量举的准确性。',
        },
        {
          question: '测试真实1RM安全吗？',
          answer: '测试真实1RM会对关节和中枢神经系统造成重大压力。请务必确保姿势正确、有人保护并完成渐进热身组。对大多数人而言，使用本计算器从次最大努力中估算1RM是更安全且同样有效的方法。',
        },
        {
          question: '我应该多久重新计算一次1RM？',
          answer: '建议每4–8周重新计算一次，或在一个训练阶段结束时重算。初学者力量进步快（可更频繁重算），进阶训练者进步相对缓慢。新的1RM估算值能帮助您更新训练负荷，持续取得进步。',
        },
      ],
    },
    cta: {
      title: '准备好精准训练了吗？',
      subtitle: '利用您的一次最大重量，告别猜测，开始科学编程。每一组、每一次——都精准到位。',
      button: '立即计算我的1RM',
    },
  },

  ko: {
    meta: {
      title: '1RM 계산기 | 무료 1회 최대 중량 계산 도구',
      description: 'Brzycki, Epley, Lombardi 공식으로 1RM(1회 최대 중량)을 즉시 계산하세요. 파워리프팅, CrossFit, 근력 운동을 위한 무료 퍼센트 분석표.',
      keywords: '1RM 계산기, 1회 최대 중량 계산기, 1rm계산기, 근력 계산기, 파워리프팅, 벤치프레스 최대중량, 스쿼트 최대중량, 데드리프트 최대중량',
    },
    hero: {
      badge: '무료 온라인 도구',
      title: '1RM 계산기',
      subtitle: '과학적 공식으로 최대 근력을 즉시 추정하고, 훈련에 활용할 완전한 퍼센트 분석표를 받아보세요.',
      cta: '내 1RM 계산하기',
    },
    nav: {
      whatIs: '1RM이란',
      howTo: '사용 방법',
      whoNeeds: '대상',
      faq: 'FAQ',
    },
    calculator: {
      title: '1회 최대 중량 계산하기',
      subtitle: '운동 정보를 입력하여 1RM 근력을 추정하세요.',
      liftLabel: '운동 종류',
      weightLabel: '중량',
      repsLabel: '반복 횟수',
      calculateBtn: '1RM 계산',
      recalculateBtn: '재계산',
      results: {
        title: '추정 1회 최대 중량',
        analysis: '분석',
        formulaLabel: '공식',
        percentageCol: '퍼센트',
        weightCol: '중량',
        repsCol: '예상 횟수',
        emptyTitle: '계산 준비 완료',
        emptyDesc: '위에 운동 정보를 입력하여 근력 보고서를 생성하세요.',
      },
    },
    whatIs: {
      title: '1RM 계산기란 무엇인가요?',
      paragraphs: [
        '1회 최대 중량 계산기(1RM 계산기)는 모든 운동에서 단 1회 들어올릴 수 있는 최대 중량을 추정하는 필수 도구입니다. 1RM은 올바른 자세를 유지하면서 1회 완전한 동작을 완료할 수 있는 절대적인 최대 부하, 즉 당신의 근력 상한선을 나타냅니다.',
        '부상 위험이 있는 실제 최대 중량 테스트 대신, 1RM 계산기는 여러 번 들 수 있는 가벼운 중량을 기반으로 검증된 수학적 공식을 사용해 이 수치를 추정합니다. 가장 널리 사용되는 공식은 Brzycki 공식(벤치프레스에 적합), Epley 공식(스쿼트에 효과적), Lombardi 공식(데드리프트에 선호)입니다.',
        '1RM을 아는 것은 효과적인 근력 훈련 프로그래밍의 기초입니다. 대부분의 근거 기반 훈련 프로그램은 1RM의 퍼센트로 부하를 규정합니다. 근비대에는 75%, 최대 근력 적응에는 85% 이상이 사용됩니다. 이 수치 없이는 훈련 계획이 단순한 추측에 불과합니다.',
      ],
    },
    howTo: {
      title: '1RM 계산기 사용 방법',
      subtitle: '세 가지 간단한 단계로 근력 데이터를 확인하세요.',
      steps: [
        {
          number: '01',
          title: '운동 종류와 단위 선택',
          desc: '벤치프레스, 스쿼트, 데드리프트 또는 일반 운동 중 선택하고, 원하는 중량 단위(kg 또는 lb)를 고르세요.',
        },
        {
          number: '02',
          title: '중량과 반복 횟수 입력',
          desc: '들어올린 중량과 완료한 반복 횟수를 입력하세요. 최대에 가까운 1–5회 세트에서 가장 정확한 추정값이 나옵니다.',
        },
        {
          number: '03',
          title: '1RM 확인 후 스마트하게 훈련',
          desc: '추정 1RM과 완전한 퍼센트 표가 즉시 표시됩니다. 50% 회복 훈련부터 95% 최대 근력까지 표를 활용해 모든 세트를 프로그래밍하세요.',
        },
      ],
    },
    whoNeeds: {
      title: '누가 1RM 계산기가 필요한가요?',
      subtitle: '초보자부터 엘리트 선수까지 — 근력 훈련에 진지한 모든 사람이 자신의 수치를 아는 것에서 이득을 얻습니다.',
      items: [
        {
          title: '파워리프터',
          desc: '매번 최대 중량을 시도하지 않고도 스쿼트, 벤치, 데드리프트 진행 상황을 추적하세요. 정확한 퍼센트로 피킹 사이클을 계획하세요.',
        },
        {
          title: 'CrossFit 선수',
          desc: '체력 중심 프로그램 내에서 무거운 바벨 운동을 지능적으로 조정하세요. 바벨 복합 동작과 헤비 싱글을 위한 퍼센트를 파악하세요.',
        },
        {
          title: '보디빌더',
          desc: '실제 근력 데이터를 기반으로 근비대 단계를 설계하세요. 65–85% 1RM 범위를 활용하여 점진적 과부하로 근육 성장을 이끄세요.',
        },
        {
          title: '초보자',
          desc: '일찍 근력 기준을 세우세요. 계산된 1RM은 초보자에게 매주 진행 상황을 측정할 수 있는 기준점을 제공합니다.',
        },
        {
          title: '근력 코치',
          desc: '그룹의 모든 선수에게 개인화된 부하를 처방하세요. 1RM 테스트 하나가 전체 훈련 사이클의 퍼센트 기반 프로그래밍을 이끕니다.',
        },
        {
          title: '역도 선수',
          desc: '인상과 용상에 퍼센트 부하를 적용하세요. 최대 시도 없이 여러 메소사이클에 걸쳐 상대적 근력 향상을 추적하세요.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      subtitle: '1회 최대 중량과 이 계산기 사용법에 관한 모든 질문과 답변.',
      items: [
        {
          question: '이 1RM 계산기는 얼마나 정확한가요?',
          answer: '이 계산기는 검증된 공식을 사용합니다. 일반 운동과 벤치프레스에는 Brzycki, 스쿼트에는 Epley, 데드리프트에는 Lombardi 공식입니다. 1–5회 세트에서 정확도가 가장 높습니다. 10회를 초과하면 근지구력 요소가 개입되어 추정 정확도가 떨어집니다. 결과는 항상 추정값으로 취급하고 실제 퍼포먼스에 맞게 조정하세요.',
        },
        {
          question: '가장 정확한 1RM 추정을 위한 반복 횟수는?',
          answer: '최대에 가까운 강도의 1–5회 반복에서 가장 정확한 추정이 나옵니다. 10회를 초과하면 지구력 요소가 더 크게 작용하여 공식 정확도가 떨어집니다. 최상의 결과를 위해 올바른 기술로 3–6회 들어올릴 수 있는 중량을 사용하세요.',
        },
        {
          question: '모든 운동에 사용할 수 있나요?',
          answer: '네, 하지만 스쿼트, 벤치프레스, 데드리프트 같은 복합 바벨 운동에 가장 잘 작동합니다. 고립 운동(예: 바이셉 컬)은 근육 피로 패턴이 다르기 때문에 이 공식과 완전히 일치하지 않을 수 있습니다. 종목별 공식은 세 가지 주요 파워리프트의 정확도를 크게 향상시킵니다.',
        },
        {
          question: '실제 1RM 테스트는 안전한가요?',
          answer: '실제 1RM 테스트는 관절과 중추신경계에 상당한 스트레스를 줍니다. 항상 올바른 자세, 보조자, 점진적인 웜업 세트를 갖추어야 합니다. 대부분의 사람에게는 이 계산기를 사용해 최대 이하 노력에서 1RM을 추정하는 것이 더 안전하고 동일하게 유용한 방법입니다.',
        },
        {
          question: '1RM은 얼마나 자주 재계산해야 하나요?',
          answer: '4–8주마다 또는 훈련 블록이 끝날 때 재계산하세요. 초보자는 근력이 빠르게 적응하므로 더 자주 재계산하고, 고급 훈련자는 더 느리게 적응합니다. 새로운 1RM 추정값으로 훈련 부하를 업데이트하고 지속적인 진보를 이어나가세요.',
        },
      ],
    },
    cta: {
      title: '정밀하게 훈련할 준비가 되셨나요?',
      subtitle: '1회 최대 중량을 활용해 추측을 멈추고 과학적으로 프로그래밍하세요. 모든 세트, 모든 반복 — 완벽하게 조율됩니다.',
      button: '지금 내 1RM 계산하기',
    },
  },

  ja: {
    meta: {
      title: '1RM計算機 | 無料1回最大重量計算ツール',
      description: 'Brzycki・Epley・Lombardi式で1RM（1回最大重量）を即座に計算。パワーリフティング、CrossFit、筋力トレーニング向けの無料パーセンテージ分析表。',
      keywords: '1RM計算機, 1回最大重量計算機, 1rm計算, 筋力トレーニング, パワーリフティング, ベンチプレス最大重量, スクワット最大重量, デッドリフト最大重量',
    },
    hero: {
      badge: '無料オンラインツール',
      title: '1RM計算機',
      subtitle: '科学的根拠のある公式で最大筋力を即座に推定。トレーニングに活かせる完全なパーセンテージ表を取得しましょう。',
      cta: '私の1RMを計算する',
    },
    nav: {
      whatIs: '1RMとは',
      howTo: '使い方',
      whoNeeds: '対象者',
      faq: 'FAQ',
    },
    calculator: {
      title: '1回最大重量を計算する',
      subtitle: '種目情報を入力して1RM筋力を推定しましょう。',
      liftLabel: '種目',
      weightLabel: '重量',
      repsLabel: '反復回数',
      calculateBtn: '1RMを計算',
      recalculateBtn: '再計算する',
      results: {
        title: '推定1回最大重量',
        analysis: '分析',
        formulaLabel: '使用公式',
        percentageCol: 'パーセント',
        weightCol: '重量',
        repsCol: '推定回数',
        emptyTitle: '計算の準備ができています',
        emptyDesc: '上のフォームに種目情報を入力して筋力レポートを生成してください。',
      },
    },
    whatIs: {
      title: '1RM計算機とは何ですか？',
      paragraphs: [
        '1回最大重量計算機（1RM計算機）は、あらゆる種目で1回だけ持ち上げられる最大重量を推定する必須ツールです。1RMは正しいフォームで1回の動作を完了できる最大負荷、つまり絶対的な筋力の上限を表します。',
        'ジムでの実際の最大重量テスト（怪我のリスクがある）の代わりに、1RM計算機は複数回持ち上げられる軽い重量をもとに、実証済みの数学的公式を使ってこの数値を推定します。最もよく使われる公式は、Brzycki式（ベンチプレスに最適）、Epley式（スクワットに効果的）、Lombardi式（デッドリフトに好まれる）です。',
        '1RMを知ることは、効果的な筋力トレーニングプログラミングの基盤です。大半のエビデンスベースのプログラムは1RMのパーセンテージで負荷を規定します——筋肥大には75%、最大筋力適応には85%以上が使われます。この数値なしでは、プログラミングは推測に過ぎません。',
      ],
    },
    howTo: {
      title: '1RM計算機の使い方',
      subtitle: '3つの簡単なステップで筋力データを解き明かしましょう。',
      steps: [
        {
          number: '01',
          title: '種目と単位を選ぶ',
          desc: 'ベンチプレス、スクワット、デッドリフト、または一般種目から選択し、お好みの重量単位（kgまたはlb）を選びます。',
        },
        {
          number: '02',
          title: '重量と回数を入力する',
          desc: '持ち上げた重量と行った反復回数を入力します。最大に近い強度での1〜5回のセットが最も正確な推定値を得られます。',
        },
        {
          number: '03',
          title: '1RMを確認してスマートにトレーニング',
          desc: '推定1RMと完全なパーセンテージ表が即座に表示されます。50%の回復トレーニングから95%の筋力ピークまで、表を活用して全セットをプログラムしましょう。',
        },
      ],
    },
    whoNeeds: {
      title: '1RM計算機を必要とするのは誰ですか？',
      subtitle: '初心者からエリートアスリートまで — 筋力トレーニングに真剣な人なら誰でも、自分の数値を知ることで恩恵を受けられます。',
      items: [
        {
          title: 'パワーリフター',
          desc: '毎回最大重量に挑戦しなくても、スクワット・ベンチ・デッドリフトの進捗を追跡できます。正確なパーセンテージでピーキングサイクルを計画しましょう。',
        },
        {
          title: 'CrossFitアスリート',
          desc: 'コンディショニング中心のプログラム内で、重いバーベル種目をスマートにスケールできます。バーベルコンプレックスやヘビーシングルのパーセンテージを把握しましょう。',
        },
        {
          title: 'ボディビルダー',
          desc: '実際の筋力データを基に筋肥大フェーズを設計しましょう。65〜85%の1RM範囲を使って、漸進的過負荷で筋肉成長を促進します。',
        },
        {
          title: '初心者',
          desc: '早期に筋力のベースラインを確立しましょう。計算された1RMは、初心者が週ごとの進捗を測定するための基準点を提供します。',
        },
        {
          title: '筋力コーチ',
          desc: 'グループ内の全アスリートに個別化された負荷を処方できます。1回のRMテストが、1トレーニングサイクル全体のパーセンテージベースプログラミングを支えます。',
        },
        {
          title: 'ウェイトリフター',
          desc: 'スナッチとクリーン&ジャークにパーセンテージ負荷を適用しましょう。最大挑戦なしに、複数のメゾサイクルにわたって相対的な筋力向上を追跡できます。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      subtitle: '1回最大重量とこの計算機の使い方について、知りたいことすべてをお答えします。',
      items: [
        {
          question: 'この1RM計算機はどれくらい正確ですか？',
          answer: 'この計算機は実証済みの公式を使用しています。一般種目とベンチプレスにはBrzycki式、スクワットにはEpley式、デッドリフトにはLombardi式です。1〜5回のセットで精度が最も高くなります。10回を超えると筋持久力の要素が介入し、推定精度が下がります。結果は常に推定値として扱い、実際のパフォーマンスに基づいて調整してください。',
        },
        {
          question: '最も正確な1RM推定のための反復回数は？',
          answer: '最大に近い強度での1〜5回の反復から最も正確な推定が得られます。10回を超えると、持久力要素がより大きな役割を果たし公式精度が下がります。最良の結果には、正しい技術で3〜6回持ち上げられる重量を使用してください。',
        },
        {
          question: 'すべての種目に使えますか？',
          answer: 'はい、ただしスクワット、ベンチプレス、デッドリフトなどの複合バーベル種目に最も効果的です。アイソレーション種目（バイセップカールなど）は筋肉疲労のパターンが異なるため、これらの公式と完全に一致しない場合があります。種目別公式は三大パワーリフトの精度を大幅に向上させます。',
        },
        {
          question: '実際の1RMテストは安全ですか？',
          answer: '実際の1RMテストは関節と中枢神経系に大きなストレスをかけます。常に正しいフォーム、スポッターの確保、漸進的ウォームアップセットを徹底してください。ほとんどの人にとって、この計算機を使った最大下努力からの1RM推定は、より安全かつ同様に有用な代替手段です。',
        },
        {
          question: '1RMはどのくらいの頻度で再計算すべきですか？',
          answer: '4〜8週ごと、またはトレーニングブロック終了時に再計算してください。初心者は筋力が急速に適応するのでより頻繁に、上級者はより緩やかです。新しい1RM推定値でトレーニング負荷を更新し、継続的な進歩を維持しましょう。',
        },
      ],
    },
    cta: {
      title: '精密なトレーニングを始める準備はできましたか？',
      subtitle: '1回最大重量を活用して推測をやめ、プログラムし始めましょう。すべてのセット、すべての反復 — 完璧に調整されます。',
      button: '今すぐ1RMを計算する',
    },
  },

  de: {
    meta: {
      title: 'Einwiederholungsmaximum Rechner | Kostenloser 1RM Kraftrechner',
      description: 'Berechnen Sie Ihr Einwiederholungsmaximum (1RM) sofort mit Brzycki-, Epley- und Lombardi-Formel. Kostenlose Prozentaufschlüsselung für Powerlifting, CrossFit und Krafttraining.',
      keywords: 'einwiederholungsmaximum rechner, 1rm rechner, 1rm berechnen, krafttraining, powerlifting, bankdrücken maximum, kniebeuge maximum',
    },
    hero: {
      badge: 'Kostenloses Online-Tool',
      title: 'Einwiederholungsmaximum Rechner',
      subtitle: 'Schätzen Sie Ihre maximale Kraft sofort mit wissenschaftlich fundierten Formeln. Erhalten Sie eine vollständige Prozentaufschlüsselung für Ihr Training.',
      cta: 'Mein 1RM berechnen',
    },
    nav: {
      whatIs: 'Was ist 1RM',
      howTo: 'Anleitung',
      whoNeeds: 'Für wen',
      faq: 'FAQ',
    },
    calculator: {
      title: 'Ihr Einwiederholungsmaximum berechnen',
      subtitle: 'Geben Sie Ihre Hebedaten ein, um Ihre 1RM-Kraft zu schätzen.',
      liftLabel: 'Übungstyp',
      weightLabel: 'Gewicht',
      repsLabel: 'Wiederholungen',
      calculateBtn: '1RM Berechnen',
      recalculateBtn: 'Neu berechnen',
      results: {
        title: 'Geschätztes Einwiederholungsmaximum',
        analysis: 'Analyse',
        formulaLabel: 'Basierend auf',
        percentageCol: 'Prozent',
        weightCol: 'Gewicht',
        repsCol: 'Gesch. Wdh.',
        emptyTitle: 'Bereit zur Berechnung',
        emptyDesc: 'Geben Sie oben Ihre Hebedaten ein, um Ihren Kraftbericht zu erstellen.',
      },
    },
    whatIs: {
      title: 'Was ist ein Einwiederholungsmaximum Rechner?',
      paragraphs: [
        'Ein Einwiederholungsmaximum Rechner (1RM-Rechner) ist ein unverzichtbares Werkzeug, das das maximale Gewicht schätzt, das Sie für eine einzige Wiederholung einer Übung heben können. Ihr 1RM repräsentiert Ihre absolute Kraftgrenze — die schwerste Last, die Ihre Muskeln bei korrekter Technik für eine vollständige Wiederholung bewältigen können.',
        'Anstatt Ihr tatsächliches Maximum im Fitnessstudio zu testen (was ein Verletzungsrisiko birgt), verwendet ein 1RM-Rechner bewährte mathematische Formeln, um diese Zahl auf Basis leichterer Gewichte zu schätzen. Die meistgenutzten Formeln sind die Brzycki-Formel (ideal für Bankdrücken), die Epley-Formel (besonders effektiv für Kniebeugen) und die Lombardi-Formel (bevorzugt für Kreuzheben).',
        'Ihr 1RM zu kennen bildet die Grundlage für effektives Krafttraining. Die meisten evidenzbasierten Programme schreiben Lasten als Prozentsatz Ihres 1RM vor — 75% für Hypertrophie, 85%+ für maximale Kraftanpassungen. Ohne diese Zahl ist Trainingsprogrammierung bloße Schätzung.',
      ],
    },
    howTo: {
      title: 'Wie benutzt man einen Einwiederholungsmaximum Rechner?',
      subtitle: 'Drei einfache Schritte, um Ihre Kraftdaten freizuschalten.',
      steps: [
        {
          number: '01',
          title: 'Übung & Einheit wählen',
          desc: 'Wählen Sie den Übungstyp — Bankdrücken, Kniebeuge, Kreuzheben oder allgemeine Übungen. Wählen Sie Ihre bevorzugte Gewichtseinheit (kg oder lb).',
        },
        {
          number: '02',
          title: 'Gewicht & Wiederholungen eingeben',
          desc: 'Geben Sie das gehobene Gewicht und die Anzahl der Wiederholungen ein. Die genauesten Schätzungen ergeben sich aus Sätzen mit 1–5 Wiederholungen nahe dem Maximum.',
        },
        {
          number: '03',
          title: '1RM ablesen & gezielter trainieren',
          desc: 'Ihr geschätztes 1RM und eine vollständige Prozenttabelle erscheinen sofort. Nutzen Sie die Tabelle, um jeden Satz zu programmieren — von 50% Regenerationsarbeit bis zu 95% Kraftpeaks.',
        },
      ],
    },
    whoNeeds: {
      title: 'Wer braucht einen Einwiederholungsmaximum Rechner?',
      subtitle: 'Von Anfängern bis zu Spitzensportlern — jeder, der Krafttraining ernst nimmt, profitiert vom Kennen seiner Zahlen.',
      items: [
        {
          title: 'Powerlifter',
          desc: 'Verfolgen Sie Fortschritte bei Kniebeuge, Bankdrücken und Kreuzheben, ohne sich jede Einheit ans Maximum zu wagen. Planen Sie Ihren Peaking-Zyklus mit präzisen Prozentsätzen.',
        },
        {
          title: 'CrossFit-Athleten',
          desc: 'Skalieren Sie schwere Hantelübungen in konditionsorientierten Programmen intelligent. Kennen Sie Ihre Prozentsätze für Hantelkomplexe und schwere Einzelwiederholungen.',
        },
        {
          title: 'Bodybuilder',
          desc: 'Verankern Sie Hypertrophiephasen in realen Kraftdaten. Nutzen Sie 65–85% des 1RM, um Muskelwachstum durch progressive Überlastung zu fördern.',
        },
        {
          title: 'Anfänger',
          desc: 'Legen Sie frühzeitig eine Kraftbasis fest. Ein berechnetes 1RM gibt Anfängern einen Referenzpunkt, um Fortschritte Woche für Woche zu messen.',
        },
        {
          title: 'Krafttrainer',
          desc: 'Verschreiben Sie individualisierte Lasten für jeden Athleten in Ihrer Gruppe. Ein 1RM-Test trägt einen gesamten Trainingszyklus an prozentbasierter Programmierung.',
        },
        {
          title: 'Gewichtheber',
          desc: 'Wenden Sie prozentbasierte Belastung auf Reißen und Stoßen an. Verfolgen Sie relative Kraftgewinne über Mesozyklen, ohne ständig ans Maximum zu gehen.',
        },
      ],
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Sie über das Einwiederholungsmaximum und diesen Rechner wissen müssen.',
      items: [
        {
          question: 'Wie genau ist dieser Einwiederholungsmaximum Rechner?',
          answer: 'Dieser Rechner verwendet bewährte Formeln — Brzycki für allgemeine Übungen und Bankdrücken, Epley für Kniebeugen und Lombardi für Kreuzheben. Die Genauigkeit ist am höchsten bei 1–5 Wiederholungssätzen. Über 10 Wiederholungen hinaus spielt Muskelausdauer eine größere Rolle und Schätzungen werden weniger zuverlässig. Behandeln Sie das Ergebnis stets als Schätzwert und passen Sie es anhand Ihrer Leistung an.',
        },
        {
          question: 'Welcher Wiederholungsbereich liefert die genaueste 1RM-Schätzung?',
          answer: 'Die genauesten Schätzungen ergeben sich aus 1–5 Wiederholungen nahe der maximalen Intensität. Bei mehr als 10 Wiederholungen sinkt die Formelgenauigkeit, da Ausdauerfaktoren eine größere Rolle spielen. Verwenden Sie für beste Ergebnisse ein Gewicht, das Sie für 3–6 Wiederholungen mit sauberer Technik heben können.',
        },
        {
          question: 'Kann ich ihn für jede Übung verwenden?',
          answer: 'Ja, aber er funktioniert am besten für Grundübungen wie Kniebeugen, Bankdrücken und Kreuzheben. Isolationsübungen (z. B. Bizepscurls) skalieren mit diesen Formeln möglicherweise weniger vorhersehbar, da Muskelermüdungsmuster unterschiedlich sind. Die übungsspezifischen Formeln verbessern die Genauigkeit für die drei Hauptübungen deutlich.',
        },
        {
          question: 'Ist es sicher, sein echtes 1RM zu testen?',
          answer: 'Ein echtes 1RM-Test belastet Ihre Gelenke und Ihr zentrales Nervensystem erheblich. Achten Sie auf korrekte Technik, einen Sicherungspartner und gründliches Aufwärmen mit progressiven Aufwärmsätzen. Für die meisten ist die Schätzung per Rechner aus einem submaximalen Versuch die sicherere und gleichermaßen nützliche Alternative.',
        },
        {
          question: 'Wie oft sollte ich mein 1RM neu berechnen?',
          answer: 'Alle 4–8 Wochen oder am Ende eines Trainingsblocks neu berechnen. Anfänger passen sich schnell an (häufiger neu berechnen), Fortgeschrittene langsamer. Mit einem neuen 1RM-Schätzwert aktualisieren Sie Ihre Trainingslasten und machen weiter Fortschritte.',
        },
      ],
    },
    cta: {
      title: 'Bereit, präziser zu trainieren?',
      subtitle: 'Nutzen Sie Ihr Einwiederholungsmaximum, um mit dem Raten aufzuhören und mit dem Programmieren anzufangen. Jeden Satz, jede Wiederholung — perfekt abgestimmt.',
      button: 'Jetzt mein 1RM berechnen',
    },
  },

  fr: {
    meta: {
      title: 'Calculateur de Répétition Maximale | Calcul 1RM Gratuit',
      description: 'Calculez votre répétition maximale (1RM) instantanément avec les formules Brzycki, Epley et Lombardi. Tableau de pourcentages gratuit pour le powerlifting, CrossFit et l\'entraînement en force.',
      keywords: 'calculateur répétition maximale, calculateur 1rm, 1rm calcul, entraînement force, powerlifting, développé couché maximum, squat maximum',
    },
    hero: {
      badge: 'Outil gratuit en ligne',
      title: 'Calculateur de Répétition Maximale',
      subtitle: 'Estimez votre force maximale instantanément avec des formules scientifiquement validées. Obtenez un tableau complet de pourcentages pour optimiser votre entraînement.',
      cta: 'Calculer mon 1RM',
    },
    nav: {
      whatIs: 'C\'est quoi le 1RM',
      howTo: 'Comment utiliser',
      whoNeeds: 'Pour qui',
      faq: 'FAQ',
    },
    calculator: {
      title: 'Calculer votre répétition maximale',
      subtitle: 'Entrez vos données d\'entraînement pour estimer votre force 1RM.',
      liftLabel: 'Type d\'exercice',
      weightLabel: 'Poids soulevé',
      repsLabel: 'Répétitions',
      calculateBtn: 'Calculer mon 1RM',
      recalculateBtn: 'Recalculer',
      results: {
        title: 'Répétition Maximale Estimée',
        analysis: 'Analyse',
        formulaLabel: 'Basé sur',
        percentageCol: 'Pourcentage',
        weightCol: 'Poids',
        repsCol: 'Rép. estimées',
        emptyTitle: 'Prêt à calculer',
        emptyDesc: 'Entrez vos données ci-dessus pour générer votre rapport de force.',
      },
    },
    whatIs: {
      title: 'Qu\'est-ce qu\'un calculateur de répétition maximale ?',
      paragraphs: [
        'Un calculateur de répétition maximale (calculateur 1RM) est un outil essentiel qui estime le poids maximum que vous pouvez soulever pour une seule répétition d\'un exercice. Votre 1RM représente votre plafond absolu de force — la charge la plus lourde que vos muscles peuvent gérer avec une technique correcte pour une répétition complète.',
        'Plutôt que de tester votre maximum réel en salle de sport (ce qui comporte un risque de blessure), un calculateur de 1RM utilise des formules mathématiques éprouvées pour estimer ce chiffre à partir de poids plus légers. Les formules les plus utilisées sont la formule Brzycki (idéale pour le développé couché), la formule Epley (efficace pour les squats) et la formule Lombardi (préférée pour le soulevé de terre).',
        'Connaître votre 1RM constitue la base d\'une programmation d\'entraînement efficace. La plupart des programmes basés sur des preuves prescrivent les charges en pourcentage de votre 1RM — 75% pour l\'hypertrophie, 85%+ pour les adaptations de force maximale. Sans ce chiffre, la programmation n\'est que spéculation.',
      ],
    },
    howTo: {
      title: 'Comment utiliser un calculateur de répétition maximale ?',
      subtitle: 'Trois étapes simples pour accéder à vos données de force.',
      steps: [
        {
          number: '01',
          title: 'Choisir l\'exercice et l\'unité',
          desc: 'Sélectionnez le type d\'exercice — développé couché, squat, soulevé de terre ou exercices généraux. Choisissez votre unité de poids préférée (kg ou lb).',
        },
        {
          number: '02',
          title: 'Entrer le poids et les répétitions',
          desc: 'Saisissez le poids soulevé et le nombre de répétitions effectuées. La meilleure précision vient de séries de 1 à 5 répétitions à effort quasi-maximal.',
        },
        {
          number: '03',
          title: 'Lire son 1RM et s\'entraîner intelligemment',
          desc: 'Votre 1RM estimé et un tableau complet de pourcentages s\'affichent instantanément. Utilisez le tableau pour programmer chaque série — de 50% en récupération jusqu\'à 95% en force maximale.',
        },
      ],
    },
    whoNeeds: {
      title: 'Qui a besoin d\'un calculateur de répétition maximale ?',
      subtitle: 'Des débutants aux athlètes d\'élite — quiconque prend la musculation au sérieux bénéficie de connaître ses chiffres.',
      items: [
        {
          title: 'Powerlifters',
          desc: 'Suivez vos progrès au squat, développé couché et soulevé de terre sans tenter votre maximum à chaque séance. Planifiez votre cycle de peaking avec des pourcentages précis.',
        },
        {
          title: 'Athlètes CrossFit',
          desc: 'Adaptez intelligemment les exercices chargés dans les programmes axés sur le conditionnement. Connaissez vos pourcentages pour les complexes de barre et les singles lourds.',
        },
        {
          title: 'Bodybuilders',
          desc: 'Ancrez vos phases d\'hypertrophie à des données de force réelles. Utilisez les plages de 65–85% du 1RM pour stimuler la croissance musculaire par surcharge progressive.',
        },
        {
          title: 'Débutants',
          desc: 'Établissez une base de force dès le début. Un 1RM calculé donne aux débutants un point de référence pour mesurer leurs progrès semaine après semaine.',
        },
        {
          title: 'Coachs en force',
          desc: 'Prescrivez des charges individualisées pour chaque athlète de votre groupe. Un test de 1RM alimente tout un cycle d\'entraînement en programmation basée sur les pourcentages.',
        },
        {
          title: 'Haltérophiles',
          desc: 'Appliquez un chargement basé sur les pourcentages à l\'arraché et à l\'épaulé-jeté. Suivez les gains de force relative sur plusieurs mésocycles sans tentatives maximales constantes.',
        },
      ],
    },
    faq: {
      title: 'Questions Fréquemment Posées',
      subtitle: 'Tout ce que vous devez savoir sur la répétition maximale et l\'utilisation de ce calculateur.',
      items: [
        {
          question: 'Quelle est la précision de ce calculateur de répétition maximale ?',
          answer: 'Ce calculateur utilise des formules éprouvées — Brzycki pour les exercices généraux et le développé couché, Epley pour les squats et Lombardi pour le soulevé de terre. La précision est maximale avec des séries de 1 à 5 répétitions. Au-delà de 10, l\'endurance musculaire devient un facteur et les estimations sont moins fiables. Traitez toujours le résultat comme une estimation et ajustez-le selon vos performances.',
        },
        {
          question: 'Quelle plage de répétitions donne l\'estimation 1RM la plus précise ?',
          answer: 'Les estimations les plus précises proviennent d\'efforts de 1 à 5 répétitions à intensité quasi-maximale. Au-delà de 10 répétitions, les facteurs d\'endurance jouent un rôle plus important et réduisent la précision. Pour de meilleurs résultats, utilisez un poids que vous pouvez soulever 3 à 6 fois avec une bonne technique.',
        },
        {
          question: 'Puis-je l\'utiliser pour n\'importe quel exercice ?',
          answer: 'Oui, mais il fonctionne mieux pour les exercices polyarticulaires comme les squats, le développé couché et le soulevé de terre. Les exercices d\'isolation (comme les curls biceps) peuvent ne pas s\'adapter aussi prévisiblement en raison de patterns de fatigue musculaire différents. Les formules spécifiques aux exercices améliorent considérablement la précision pour les trois levées principales.',
        },
        {
          question: 'Est-il sûr de tester son vrai 1RM ?',
          answer: 'Tester un vrai 1RM impose un stress significatif à vos articulations et à votre système nerveux central. Assurez-vous toujours d\'avoir une technique correcte, un pareur disponible, et d\'avoir bien échauffé avec des séries progressives. Pour la plupart des gens, estimer le 1RM à partir d\'un effort sous-maximal est une alternative plus sûre et tout aussi utile.',
        },
        {
          question: 'À quelle fréquence dois-je recalculer mon 1RM ?',
          answer: 'Recalculez toutes les 4 à 8 semaines, ou à la fin d\'un bloc d\'entraînement. Les débutants s\'adaptent rapidement (recalculez plus souvent), les avancés plus lentement. Un nouvel estimé de 1RM vous permet de mettre à jour vos charges et de continuer à progresser.',
        },
      ],
    },
    cta: {
      title: 'Prêt à vous entraîner avec précision ?',
      subtitle: 'Utilisez votre répétition maximale pour arrêter de deviner et commencer à programmer. Chaque série, chaque répétition — parfaitement calibrés.',
      button: 'Calculer mon 1RM maintenant',
    },
  },

  es: {
    meta: {
      title: 'Calculadora de Repetición Máxima | Calculadora 1RM Gratis',
      description: 'Calcula tu repetición máxima (1RM) al instante con las fórmulas Brzycki, Epley y Lombardi. Tabla de porcentajes gratuita para powerlifting, CrossFit y entrenamiento de fuerza.',
      keywords: 'calculadora repetición máxima, calculadora 1rm, calcular 1rm, entrenamiento de fuerza, powerlifting, press banca máximo, sentadilla máximo',
    },
    hero: {
      badge: 'Herramienta gratuita',
      title: 'Calculadora de Repetición Máxima',
      subtitle: 'Estima tu fuerza máxima al instante con fórmulas respaldadas por la ciencia. Obtén una tabla de porcentajes completa para potenciar tu entrenamiento.',
      cta: 'Calcular mi 1RM',
    },
    nav: {
      whatIs: 'Qué es el 1RM',
      howTo: 'Cómo usarlo',
      whoNeeds: 'Para quién',
      faq: 'FAQ',
    },
    calculator: {
      title: 'Calcular tu repetición máxima',
      subtitle: 'Introduce tus datos de entrenamiento para estimar tu fuerza 1RM.',
      liftLabel: 'Tipo de ejercicio',
      weightLabel: 'Peso levantado',
      repsLabel: 'Repeticiones',
      calculateBtn: 'Calcular 1RM',
      recalculateBtn: 'Recalcular',
      results: {
        title: 'Repetición Máxima Estimada',
        analysis: 'Análisis',
        formulaLabel: 'Basado en',
        percentageCol: 'Porcentaje',
        weightCol: 'Peso',
        repsCol: 'Reps estimadas',
        emptyTitle: 'Listo para calcular',
        emptyDesc: 'Introduce tus datos arriba para generar tu informe de fuerza.',
      },
    },
    whatIs: {
      title: '¿Qué es una calculadora de repetición máxima?',
      paragraphs: [
        'Una calculadora de repetición máxima (calculadora 1RM) es una herramienta esencial que estima el peso máximo que puedes levantar para una sola repetición de cualquier ejercicio. Tu 1RM representa tu techo absoluto de fuerza — la carga más pesada que tus músculos pueden manejar con la técnica correcta para una repetición completa.',
        'En lugar de probar tu máximo real en el gimnasio (lo que conlleva riesgo de lesión), una calculadora de 1RM utiliza fórmulas matemáticas probadas para estimar este número basándose en pesos más ligeros. Las más utilizadas son la fórmula Brzycki (ideal para press de banca), la fórmula Epley (efectiva para sentadillas) y la fórmula Lombardi (preferida para peso muerto).',
        'Conocer tu 1RM forma la base de una programación de entrenamiento efectiva. La mayoría de los programas basados en evidencia prescriben cargas como porcentaje de tu 1RM — el 75% para hipertrofia, el 85%+ para adaptaciones de fuerza máxima. Sin este número, la programación es pura suposición.',
      ],
    },
    howTo: {
      title: '¿Cómo usar una calculadora de repetición máxima?',
      subtitle: 'Tres sencillos pasos para desbloquear tus datos de fuerza.',
      steps: [
        {
          number: '01',
          title: 'Elige el ejercicio y la unidad',
          desc: 'Selecciona el tipo de ejercicio — press de banca, sentadilla, peso muerto o ejercicios generales. Elige tu unidad de peso preferida (kg o lb).',
        },
        {
          number: '02',
          title: 'Introduce peso y repeticiones',
          desc: 'Ingresa el peso levantado y el número de repeticiones completadas. La mayor precisión se obtiene con series de 1–5 repeticiones a esfuerzo casi máximo.',
        },
        {
          number: '03',
          title: 'Lee tu 1RM y entrena con más inteligencia',
          desc: 'Tu 1RM estimado y una tabla de porcentajes completa aparecen al instante. Usa la tabla para programar cada serie — desde el 50% de recuperación hasta el 95% de picos de fuerza.',
        },
      ],
    },
    whoNeeds: {
      title: '¿Quién necesita una calculadora de repetición máxima?',
      subtitle: 'Desde principiantes hasta atletas de élite — cualquiera que se tome en serio el entrenamiento de fuerza se beneficia de conocer sus números.',
      items: [
        {
          title: 'Powerlifters',
          desc: 'Sigue el progreso en sentadilla, press y peso muerto sin intentar el máximo en cada sesión. Planifica tu ciclo de peaking con porcentajes precisos.',
        },
        {
          title: 'Atletas de CrossFit',
          desc: 'Escala inteligentemente los ejercicios con barra dentro de programas de acondicionamiento. Conoce tus porcentajes para complejos de barra y singles pesados.',
        },
        {
          title: 'Culturistas',
          desc: 'Ancla tus fases de hipertrofia a datos de fuerza reales. Usa rangos del 65–85% del 1RM para impulsar el crecimiento muscular con sobrecarga progresiva.',
        },
        {
          title: 'Principiantes',
          desc: 'Establece una base de fuerza desde el principio. Un 1RM calculado da a los principiantes un punto de referencia para medir el progreso semana a semana.',
        },
        {
          title: 'Entrenadores de fuerza',
          desc: 'Prescribe cargas individualizadas para cada atleta de tu grupo. Una prueba de 1RM sostiene todo un ciclo de entrenamiento en programación basada en porcentajes.',
        },
        {
          title: 'Halterófilos',
          desc: 'Aplica carga basada en porcentajes al arranque y al dos tiempos. Sigue las ganancias de fuerza relativa a lo largo de mesociclos sin intentos máximos constantes.',
        },
      ],
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre la repetición máxima y cómo usar esta calculadora.',
      items: [
        {
          question: '¿Qué tan precisa es esta calculadora de repetición máxima?',
          answer: 'Esta calculadora usa fórmulas probadas — Brzycki para ejercicios generales y press de banca, Epley para sentadillas y Lombardi para peso muerto. La precisión es mayor con series de 1–5 repeticiones. Más allá de 10, la resistencia muscular se convierte en un factor y las estimaciones son menos fiables. Trata siempre el resultado como una estimación y ajústala según tu rendimiento.',
        },
        {
          question: '¿Qué rango de repeticiones da la estimación 1RM más precisa?',
          answer: 'Las estimaciones más precisas provienen de esfuerzos de 1–5 repeticiones a intensidad casi máxima. Más allá de 10, los factores de resistencia juegan un papel mayor y reducen la precisión de la fórmula. Para mejores resultados, usa un peso que puedas levantar 3–6 veces con buena técnica.',
        },
        {
          question: '¿Puedo usarla para cualquier ejercicio?',
          answer: 'Sí, pero funciona mejor para levantamientos compuestos como sentadillas, press de banca y peso muerto. Los ejercicios de aislamiento (como los curls de bíceps) pueden no escalar tan predeciblemente debido a distintos patrones de fatiga muscular. Las fórmulas específicas por ejercicio mejoran significativamente la precisión para los tres levantamientos principales.',
        },
        {
          question: '¿Es seguro probar mi verdadero 1RM?',
          answer: 'Probar un 1RM real coloca un estrés significativo en tus articulaciones y sistema nervioso central. Asegúrate siempre de tener la técnica correcta, un observador presente y haber calentado a fondo con series progresivas. Para la mayoría, estimar el 1RM a partir de un esfuerzo submáximo con esta calculadora es una alternativa más segura e igualmente útil.',
        },
        {
          question: '¿Con qué frecuencia debo recalcular mi 1RM?',
          answer: 'Recalcula cada 4–8 semanas o al final de un bloque de entrenamiento. Los principiantes se adaptan rápidamente (recalcula más a menudo), los avanzados más lentamente. Un nuevo estimado de 1RM te permite actualizar las cargas de entrenamiento y continuar progresando.',
        },
      ],
    },
    cta: {
      title: '¿Listo para entrenar con precisión?',
      subtitle: 'Usa tu repetición máxima para dejar de adivinar y empezar a programar. Cada serie, cada repetición — perfectamente calibradas.',
      button: 'Calcular mi 1RM ahora',
    },
  },
} as const
