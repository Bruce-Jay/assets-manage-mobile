// 如何给 canvas 绘图加入 1,2,3 等货柜号
// 取色原则：不要黄色！！用于标注着重色的！
const roomConfigs = {
    'S212-2': [
        { top: 8, left: 25, width: 220, height: 220, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 18, left: 20, width: 13, height: 50, fill: '#4f4f4f'},
        { top: 228, left: 190, width: 50, height: 13, fill: '#4f4f4f'},
        { top: 20, left: 70, width: 150, height: 40, fill: '#ffb174'},
        { top: 70, left: 200, width: 40, height: 60, fill: '#ee5a5a'},
        { top: 140, left: 200, width: 40, height: 60, fill: '#b31e6f'},
        { top: 90, left: 40, width: 40, height: 60, fill: '#22eaaa'},
        { top: 160, left: 40, width: 40, height: 60, fill: '#2f89fc'},
    ],
    'N209': [
        { top: 8, left: 25, width: 210, height: 202, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 20, left: 40, width: 40, height: 90, fill: '#ffb174'},
        { top: 20, left: 200, width: 30, height: 110, fill: '#ee5a5a'},
        { top: 160, left: 40, width: 70, height: 40, fill: '#b31e6f'},
        { top: 210, left: 180, width: 50, height: 13, fill: '#4f4f4f'}
    ],
    'N210': [
        { top: 8, left: 25, width: 245, height: 210, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 20, left: 40, width: 40, height: 120, fill: '#ffb174'},
        { top: 20, left: 130, width: 40, height: 120, fill: '#ee5a5a'},
        { top: 20, left: 220, width: 40, height: 120, fill: '#b31e6f'},
        { top: 180, left: 170, width: 70, height: 30, fill: '#22eaaa'},
        { top: 218, left: 50, width: 50, height: 13, fill: '#4f4f4f'}
    ],
    'N211': [
        { top: 8, left: 25, width: 185, height: 202, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 160, left: 40, width: 100, height: 40, fill: '#ffb174'},
        { top: 20, left: 40, width: 40, height: 90, fill: '#ee5a5a'},
        { top: 20, left: 160, width: 40, height: 90, fill: '#b31e6f'},
        { top: 210, left: 160, width: 50, height: 13, fill: '#4f4f4f'}
    ],
    'N525': [
        { top: 8, left: 25, width: 260, height: 276, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 20, left: 230, width: 15, height: 20, fill: '#ffb174', label: '1'},
        { top: 40, left: 230, width: 15, height: 20, fill: '#ee5a5a'},
        { top: 60, left: 230, width: 15, height: 20, fill: '#b31e6f'},
        { top: 80, left: 230, width: 15, height: 20, fill: '#22eaaa'},
        { top: 100, left: 230, width: 15, height: 20, fill: '#2f89fc'},
        { top: 120, left: 230, width: 15, height: 20, fill: '#581b98'},
        { top: 140, left: 230, width: 15, height: 20, fill: '#9c1de7'},
        { top: 160, left: 230, width: 15, height: 20, fill: '#9e579d'},
        { top: 180, left: 230, width: 15, height: 20, fill: '#22d1ee'},
        { top: 210, left: 260, width: 15, height: 20, fill: '#3d5af1'},
        { top: 230, left: 260, width: 15, height: 20, fill: '#2d767f'},
        { top: 250, left: 260, width: 15, height: 20, fill: '#fcb1b1'},
        { top: 200, left: 115, width: 15, height: 20, fill: '#39bdc8'},
        { top: 200, left: 170, width: 15, height: 20, fill: '#59d4e8'},
        { top: 264, left: 190, width: 15, height: 20, fill: '#ffb174'},
        { top: 264, left: 175, width: 15, height: 20, fill: '#ee5a5a'},
        { top: 264, left: 160, width: 15, height: 20, fill: '#b31e6f'},
        { top: 264, left: 145, width: 15, height: 20, fill: '#22eaaa'},
        { top: 264, left: 130, width: 15, height: 20, fill: '#2f89fc'},
        { top: 264, left: 115, width: 15, height: 20, fill: '#581b98'},
        { top: 284, left: 250, width: 30, height: 13, fill: '#4f4f4f'}
    ],
    'N520-2': [
        { top: 80, left: 25, width: 280, height: 140, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 88, left: 40, width: 15, height: 50, fill: '#ffb174'},
        { top: 88, left: 55, width: 15, height: 50, fill: '#ee5a5a'},
        { top: 88, left: 70, width: 15, height: 50, fill: '#b31e6f'},
        { top: 88, left: 85, width: 15, height: 50, fill: '#22eaaa'},
        { top: 88, left: 100, width: 15, height: 50, fill: '#2f89fc'},
        { top: 88, left: 115, width: 15, height: 50, fill: '#581b98'},
        { top: 88, left: 130, width: 15, height: 50, fill: '#9c1de7'},
        { top: 88, left: 145, width: 15, height: 50, fill: '#9e579d'},
        { top: 88, left: 160, width: 15, height: 50, fill: '#22d1ee'},
        { top: 88, left: 175, width: 15, height: 50, fill: '#3d5af1'},
        { top: 88, left: 190, width: 15, height: 50, fill: '#2d767f'},
        { top: 88, left: 205, width: 15, height: 50, fill: '#fcb1b1'},
        { top: 88, left: 220, width: 15, height: 50, fill: '#39bdc8'},
        { top: 88, left: 235, width: 15, height: 50, fill: '#59d4e8'},
        { top: 88, left: 250, width: 25, height: 15, fill: '#22eaaa'},
        { top: 88, left: 275, width: 25, height: 15, fill: '#2f89fc'},
        { top: 205, left: 65, width: 45, height: 15, fill: '#ffb174'},
        { top: 205, left: 110, width: 45, height: 15, fill: '#ee5a5a'},
        { top: 205, left: 155, width: 45, height: 15, fill: '#b31e6f'},
        { top: 205, left: 200, width: 45, height: 15, fill: '#22eaaa'},
        { top: 180, left: 22, width: 11, height: 30, fill: '#4f4f4f'}
    ],
    'N520-3': [
        { top: 8, left: 55, width: 210, height: 202, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 20, left: 120, width: 110, height: 40, fill: '#ffb174'},
        { top: 80, left: 210, width: 30, height: 80, fill: '#ee5a5a'},
        { top: 210, left: 130, width: 50, height: 13, fill: '#4f4f4f'}
    ],
    'DC-11': [
        { top: 8, left: 35, width: 210, height: 202, fill: '#fff', stroke: "#aaaaaa", strokeWidth: 8},
        { top: 80, left: 50, width: 40, height: 60, fill: '#ffb174'},
        { top: 20, left: 50, width: 40, height: 60, fill: '#ee5a5a'},
        { top: 20, left: 120, width: 40, height: 60, fill: '#b31e6f'},
        { top: 80, left: 120, width: 40, height: 60, fill: '#22eaaa'},
        { top: 160, left: 150, width: 80, height: 30, fill: '#2f89fc'},
        { top: 80, left: 190, width: 40, height: 60, fill: '#581b98'},
        { top: 20, left: 190, width: 40, height: 60, fill: '#9c1de7'},
        { top: 210, left: 45, width: 50, height: 13, fill: '#4f4f4f'}
    ]
};

export default roomConfigs;