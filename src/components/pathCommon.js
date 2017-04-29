import Path from 'path';

export function getItem(dir, path) {
    var steps = path
        .split(Path.sep)
        .filter(step => step !== "");
    var item = dir;
    steps.forEach(function (step) {

        for (var i = 0; i < item.children.length; i++) {
            if (item.children[i].name === step) {
                item = item.children[i];
                break;
            }
        }
    }, this);
    return (item);
}

export function goDown(path, itemName) {
    return (path + itemName + "/")
}

export function goUp(path, steps) {

    var newPath = path;

    for (var index = 0; index < steps; index++) {
        newPath = Path.dirname(newPath);
    }

    return newPath + "/";
}

export function flatten(dir) {
    var result = {};
    function recurse(cur, path) {
        if (cur !== null) {
            result[cur.name] = path;
        }
        if (Array.isArray(cur.children)) {
            for (var i = 0; i < cur.children.length; i++) 
                recurse(cur.children[i], cur.children[i].type === "folder"
                    ? (path + cur.children[i].name + "/")
                    : (path + cur.children[i].name));
            }
        }
    recurse(dir, "/");
    return result;
}
