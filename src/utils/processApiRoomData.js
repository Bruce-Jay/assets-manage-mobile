// 递归处理，我的计划：
// 1. 第一层进去，发现是基本元素和列表，count设置为0，基本元素返回 roomCode 及其 value，进入列表递归，count += 1
// 2. 第二层进去，进入柜子层，count 为1。数据中包含基本元素和列表。基本元素返回 'code' 键对应的 value，进入列表递归，count += 1
// 3. 第三层进去，进入货架层，count 为2. 数据中包含基本元素。基本元素返回 'code' 键对应的 value

export default function recursiveProcess(data, level) {
    let result = {};
    
    if (Array.isArray(data)) {
        // 如果是列表，则递归处理每个元素
        return data.map(item => recursiveProcess(item, level + 1));
    } else if (typeof data === "object" && data !== null) {
        // 如果是字典，则提取 code 键对应的值并递归处理其他键值对
        for (const [key, value] of Object.entries(data)) {
            // 第一层就是数组，所以直接判断是否为 1
            if (level === 1) {
                if (key === "roomCode") {
                    result["label"] = value;
                    result["value"] = value;
                } else {
                    result["children"] = recursiveProcess(value, level)
                }
            } else {
                if (key === "code") {
                    result["label"] = value;
                    result["value"] = value;
                } else {
                    result["children"] = recursiveProcess(value, level);
                }
            }
        }
        return result;
    } else {
        // 如果是基本数据类型，则直接返回
        return;
    }
}


