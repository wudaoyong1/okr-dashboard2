// OKR数据配置 - 支持H1目标和每月动态数据
const okrData = {
    business: {
        name: '经营',
        okrs: [
            {
                objective: '经营核心指标监控',
                keyResults: [
                    {
                        text: 'HC（人力编制）达成率',
                        h1Target: 575,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { monthlyTarget: 96, actual: 529, progress: 95, note: '目标529人' },
                            '2月': { monthlyTarget: 96, actual: 0, progress: 0, note: '' },
                            '3月': { monthlyTarget: 96, actual: 0, progress: 0, note: '' },
                            '4月': { monthlyTarget: 96, actual: 0, progress: 0, note: '' },
                            '5月': { monthlyTarget: 96, actual: 0, progress: 0, note: '' },
                            '6月': { monthlyTarget: 96, actual: 0, progress: 0, note: '' }
                        }
                    },
                    {
                        text: '费用包使用率',
                        h1Target: 85,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 72, progress: 100, note: '预算使用72%' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '回款及时率',
                        h1Target: 95,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 90, progress: 95, note: '目标95%' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        }
                    },
                    {
                        text: '出入项损耗控制',
                        h1Target: 0,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 22, progress: 0, note: '损耗事件22起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '考勤损耗管理',
                        h1Target: 0,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 12, progress: 0, note: '损耗事件12起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '平均职级优化',
                        h1Target: 70,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 65, progress: 93, note: '平均职级P5.2' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        }
                    }
                ]
            }
        ]
    },
    evaluation: {
        name: '测评',
        okrs: [
            {
                objective: '测评核心指标监控',
                keyResults: [
                    {
                        text: '项目结项验收得分',
                        h1Target: 95,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 92, progress: 97, note: '验收得分92分' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        }
                    },
                    {
                        text: '骨干稳定性',
                        h1Target: 90,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 85, progress: 94, note: '骨干流失率15%' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: 'OVP单处理',
                        h1Target: 85,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 78, progress: 92, note: '处理完成率78%' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        }
                    },
                    {
                        text: '关键黑事件控制',
                        h1Target: 0,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 5, progress: 0, note: '黑事件发生5起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    }
                ]
            }
        ]
    },
    hr: {
        name: '人资',
        okrs: [
            {
                objective: '人资核心指标监控',
                keyResults: [
                    {
                        text: '骨干流失率（ipsa）',
                        h1Target: 10,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 12, progress: 80, note: '流失率12%' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '全员流失率（ipsa）',
                        h1Target: 8,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 7.5, progress: 100, note: '流失率7.5%' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '新员工流失率（ipsa）',
                        h1Target: 15,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 18, progress: 80, note: '流失率18%' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: 'EHS事件控制',
                        h1Target: 0,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 0, progress: 100, note: '无EHS事件' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    }
                ]
            }
        ]
    },
    safety: {
        name: '安规',
        okrs: [
            {
                objective: '安规核心指标监控',
                keyResults: [
                    {
                        text: '信息安全（对内）',
                        h1Target: 5,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 8, progress: 60, note: '安全风险事件8起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '信息安全（对外）',
                        h1Target: 10,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 12, progress: 80, note: '安全风险事件12起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '内控合规（对内）',
                        h1Target: 2,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 5, progress: 0, note: '合规问题5起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    },
                    {
                        text: '内控合规（对外）',
                        h1Target: 5,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 10, progress: 0, note: '合规问题10起' },
                            '2月': { actual: 0, progress: 100, note: '' },
                            '3月': { actual: 0, progress: 100, note: '' },
                            '4月': { actual: 0, progress: 100, note: '' },
                            '5月': { actual: 0, progress: 100, note: '' },
                            '6月': { actual: 0, progress: 100, note: '' }
                        },
                        reverse: true // 标记为反向指标（越低越好）
                    }
                ]
            }
        ]
    },
    quality: {
        name: '质量',
        okrs: [
            {
                objective: '质量核心指标监控',
                keyResults: [
                    {
                        text: '硬件测试可信认证',
                        h1Target: 90,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 88, progress: 98, note: '认证通过率88%' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        }
                    },
                    {
                        text: '软件测试可信认证',
                        h1Target: 85,
                        currentMonth: '1月',
                        monthlyData: {
                            '1月': { actual: 82, progress: 96, note: '认证通过率82%' },
                            '2月': { actual: 0, progress: 0, note: '' },
                            '3月': { actual: 0, progress: 0, note: '' },
                            '4月': { actual: 0, progress: 0, note: '' },
                            '5月': { actual: 0, progress: 0, note: '' },
                            '6月': { actual: 0, progress: 0, note: '' }
                        }
                    }
                ]
            }
        ]
    }
};
