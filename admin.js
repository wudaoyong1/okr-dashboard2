// 当前选择的月份
let currentMonth = '1月';

// 维度颜色映射
const dimensionColors = {
    business: { bg: 'linear-gradient(135deg, #667eea, #764ba2)', name: '经营' },
    evaluation: { bg: 'linear-gradient(135deg, #f093fb, #f5576c)', name: '测评' },
    hr: { bg: 'linear-gradient(135deg, #4facfe, #00f2fe)', name: '人资' },
    safety: { bg: 'linear-gradient(135deg, #43e97b, #38f9d7)', name: '安规' },
    quality: { bg: 'linear-gradient(135deg, #fa709a, #fee140)', name: '质量' }
};

// 选择月份
function selectMonth(month) {
    currentMonth = month;

    // 更新按钮状态
    document.querySelectorAll('.month-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === month) {
            btn.classList.add('active');
        }
    });

    // 重新渲染数据
    renderDimensions();
}

// 渲染所有维度
function renderDimensions() {
    console.log('renderDimensions 开始执行');
    const container = document.getElementById('dimensions-container');
    console.log('容器元素:', container);

    if (!container) {
        console.error('找不到dimensions-container元素');
        return;
    }

    let html = '';
    console.log('okrData对象:', okrData);
    console.log('维度键:', Object.keys(okrData));

    Object.keys(okrData).forEach(dimensionKey => {
        const dimension = okrData[dimensionKey];
        const color = dimensionColors[dimensionKey];

        console.log(`处理维度: ${dimensionKey}`, dimension);

        html += `
            <div class="dimension-section">
                <div class="dimension-header">
                    <h2 style="background: ${color.bg}; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        ${dimension.name}维度
                    </h2>
                </div>
                ${renderDimensionTable(dimensionKey, dimension)}
            </div>
        `;
    });

    console.log('生成的HTML长度:', html.length);
    container.innerHTML = html;
    console.log('renderDimensions 执行完成');
}

// 渲染维度表格
function renderDimensionTable(dimensionKey, dimension) {
    let html = `
        <table class="indicator-table">
            <thead>
                <tr>
                    <th style="width: 20%">指标名称</th>
                    <th style="width: 12%">H1目标</th>
                    <th style="width: 12%">${currentMonth}月目标</th>
                    <th style="width: 12%">${currentMonth}实际值</th>
                    <th style="width: 12%">进度(%)</th>
                    <th style="width: 17%">备注</th>
                    <th style="width: 15%">状态</th>
                </tr>
            </thead>
            <tbody>
    `;

    dimension.okrs.forEach(okr => {
        okr.keyResults.forEach((kr, index) => {
            const monthlyData = kr.monthlyData[currentMonth] || { monthlyTarget: 0, actual: 0, progress: 0, note: '' };

            // 自动计算进度
            let autoProgress = 0;
            if (kr.reverse) {
                // 反向指标（越低越好）的进度计算
                const target = kr.h1Target;
                const actual = monthlyData.actual || 0;

                if (target === 0) {
                    // 目标为0的情况：实际为0则100%，否则为0%
                    autoProgress = actual === 0 ? 100 : 0;
                } else if (actual <= target) {
                    // 实际值 <= 目标值，进度100%
                    autoProgress = 100;
                } else {
                    // 实际值 > 目标值，按比例递减
                    autoProgress = Math.max(0, Math.round((1 - (actual - target) / target) * 100));
                }
            } else if (monthlyData.monthlyTarget && monthlyData.monthlyTarget !== 0) {
                // 正向指标（越高越好）的进度计算
                autoProgress = Math.round((monthlyData.actual / monthlyData.monthlyTarget) * 100);
                // 限制在0-100范围内
                autoProgress = Math.max(0, Math.min(100, autoProgress));
            }

            const progressClass = getProgressClass(autoProgress);

            html += `
                <tr>
                    <td><strong>${kr.text}</strong></td>
                    <td>
                        <div class="input-group">
                            <input type="number"
                                   id="target-${dimensionKey}-${okr.objective}-${index}"
                                   value="${kr.h1Target}"
                                   onchange="updateTarget('${dimensionKey}', '${okr.objective}', ${index}, this.value)"
                                   placeholder="H1目标"
                                   style="width: 100px;">
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <input type="number"
                                   id="monthlyTarget-${dimensionKey}-${okr.objective}-${index}"
                                   value="${monthlyData.monthlyTarget || 0}"
                                   onchange="updateMonthlyTarget('${dimensionKey}', '${okr.objective}', ${index}, this.value)"
                                   placeholder="月目标"
                                   style="width: 100px;">
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <input type="number"
                                   id="actual-${dimensionKey}-${okr.objective}-${index}"
                                   value="${monthlyData.actual}"
                                   onchange="updateActual('${dimensionKey}', '${okr.objective}', ${index}, this.value)"
                                   placeholder="实际值">
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <input type="number"
                                   id="progress-${dimensionKey}-${okr.objective}-${index}"
                                   value="${autoProgress}"
                                   readonly
                                   style="width: 100px; background: #f0f0f0; cursor: not-allowed;">
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <textarea id="note-${dimensionKey}-${okr.objective}-${index}"
                                      onchange="updateNote('${dimensionKey}', '${okr.objective}', ${index}, this.value)"
                                      placeholder="备注信息">${monthlyData.note}</textarea>
                        </div>
                    </td>
                    <td>
                        <span class="progress-badge ${progressClass}">
                            ${getProgressStatus(autoProgress)}
                        </span>
                    </td>
                </tr>
            `;
        });
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}

// 获取进度样式类
function getProgressClass(progress) {
    if (progress >= 90) return 'progress-high';
    if (progress >= 70) return 'progress-medium';
    return 'progress-low';
}

// 获取进度状态文本
function getProgressStatus(progress) {
    if (progress >= 90) return '优秀';
    if (progress >= 70) return '良好';
    if (progress >= 50) return '一般';
    return '需改进';
}

// 更新H1目标值
function updateTarget(dimensionKey, objective, index, value) {
    const dimension = okrData[dimensionKey];
    const okr = dimension.okrs.find(o => o.objective === objective);
    if (okr && okr.keyResults[index]) {
        okr.keyResults[index].h1Target = parseFloat(value) || 0;
    }
}

// 更新月度目标值
function updateMonthlyTarget(dimensionKey, objective, index, value) {
    const dimension = okrData[dimensionKey];
    const okr = dimension.okrs.find(o => o.objective === objective);
    if (okr && okr.keyResults[index]) {
        if (!okr.keyResults[index].monthlyData[currentMonth]) {
            okr.keyResults[index].monthlyData[currentMonth] = { monthlyTarget: 0, actual: 0, progress: 0, note: '' };
        }
        okr.keyResults[index].monthlyData[currentMonth].monthlyTarget = parseFloat(value) || 0;

        // 自动更新进度
        autoUpdateProgress(dimensionKey, objective, index);
    }
}

// 更新实际值
function updateActual(dimensionKey, objective, index, value) {
    const dimension = okrData[dimensionKey];
    const okr = dimension.okrs.find(o => o.objective === objective);
    if (okr && okr.keyResults[index]) {
        if (!okr.keyResults[index].monthlyData[currentMonth]) {
            okr.keyResults[index].monthlyData[currentMonth] = { monthlyTarget: 0, actual: 0, progress: 0, note: '' };
        }
        okr.keyResults[index].monthlyData[currentMonth].actual = parseFloat(value) || 0;

        // 自动更新进度
        autoUpdateProgress(dimensionKey, objective, index);
    }
}

// 自动更新进度
function autoUpdateProgress(dimensionKey, objective, index) {
    const dimension = okrData[dimensionKey];
    const okr = dimension.okrs.find(o => o.objective === objective);
    if (okr && okr.keyResults[index]) {
        const kr = okr.keyResults[index];
        const monthlyData = kr.monthlyData[currentMonth];

        if (kr.reverse) {
            // 反向指标（越低越好）的进度计算
            const target = kr.h1Target;
            const actual = monthlyData.actual || 0;

            if (target === 0) {
                // 目标为0的情况：实际为0则100%，否则为0%
                monthlyData.progress = actual === 0 ? 100 : 0;
            } else if (actual <= target) {
                // 实际值 <= 目标值，进度100%
                monthlyData.progress = 100;
            } else {
                // 实际值 > 目标值，按比例递减
                monthlyData.progress = Math.max(0, Math.round((1 - (actual - target) / target) * 100));
            }
        } else if (monthlyData && monthlyData.monthlyTarget && monthlyData.monthlyTarget !== 0) {
            // 正向指标（越高越好）的进度计算
            const newProgress = Math.round((monthlyData.actual / monthlyData.monthlyTarget) * 100);
            monthlyData.progress = Math.max(0, Math.min(100, newProgress));
        } else {
            monthlyData.progress = 0;
        }

        // 更新页面显示
        renderDimensions();
    }
}

// 更新备注
function updateNote(dimensionKey, objective, index, value) {
    const dimension = okrData[dimensionKey];
    const okr = dimension.okrs.find(o => o.objective === objective);
    if (okr && okr.keyResults[index]) {
        if (!okr.keyResults[index].monthlyData[currentMonth]) {
            okr.keyResults[index].monthlyData[currentMonth] = { actual: 0, progress: 0, note: '' };
        }
        okr.keyResults[index].monthlyData[currentMonth].note = value;
    }
}

// 保存数据
function saveData() {
    // 将数据保存到localStorage
    localStorage.setItem('okrData', JSON.stringify(okrData));

    // 显示保存成功通知
    const notification = document.getElementById('saveNotification');
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// 导出数据
function exportData() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const fileName = `okr-data-${year}${month}${day}.json`;

    const dataStr = JSON.stringify(okrData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);

    alert(`数据已导出为：${fileName}`);
}

// 导入数据
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);

                // 验证数据格式
                if (!importedData.business || !importedData.evaluation || !importedData.hr ||
                    !importedData.safety || !importedData.quality) {
                    alert('导入失败：数据格式不正确！');
                    return;
                }

                // 确认导入
                if (confirm('确定要导入数据吗？这将覆盖当前的所有数据！')) {
                    // 深度合并数据
                    deepMerge(okrData, importedData);

                    // 保存到localStorage
                    localStorage.setItem('okrData', JSON.stringify(okrData));

                    // 重新渲染
                    renderDimensions();

                    alert('数据导入成功！');
                }
            } catch (error) {
                alert('导入失败：文件格式错误！\n错误信息：' + error.message);
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

// 深度合并函数
function deepMerge(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }
                deepMerge(target[key], source[key]);
            } else if (Array.isArray(source[key])) {
                if (Array.isArray(target[key])) {
                    source[key].forEach((sourceItem, index) => {
                        if (typeof sourceItem === 'object' && sourceItem !== null) {
                            if (target[key][index]) {
                                deepMerge(target[key][index], sourceItem);
                            } else {
                                target[key][index] = sourceItem;
                            }
                        } else {
                            target[key][index] = sourceItem;
                        }
                    });
                } else {
                    target[key] = source[key];
                }
            } else {
                target[key] = source[key];
            }
        }
    }
}

// 重置数据
function resetData() {
    if (confirm('确定要重置所有数据吗？此操作将清除所有已保存的数据，并恢复到data.js中的初始数据。\n\n注意：所有在管理页面修改的数据都将丢失！')) {
        localStorage.removeItem('okrData');
        alert('数据已重置！页面将重新加载以恢复初始数据。');
        location.reload();
    }
}

// 从localStorage加载数据
function loadSavedData() {
    const savedData = localStorage.getItem('okrData');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            Object.assign(okrData, parsedData);
            console.log('已加载保存的数据');
        } catch (e) {
            console.error('加载数据失败:', e);
        }
    } else {
        console.log('使用data.js中的初始数据');
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded 事件触发');
    console.log('okrData 是否存在:', typeof okrData);

    loadSavedData();
    console.log('加载数据后的 okrData:', okrData);

    renderDimensions();

    // 设置当前月份
    const now = new Date();
    const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const currentMonthName = monthNames[now.getMonth()];

    console.log('当前月份:', currentMonthName);

    // 如果当前月份在H1范围内，则自动选择
    if (now.getMonth() < 6) {
        selectMonth(currentMonthName);
    }
});
