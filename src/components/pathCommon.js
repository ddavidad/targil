import Path from 'path';

export function getItem(root,path) {
        var steps = path
            .split(Path.sep)
            .filter(step => step !== "");
        var item = root;
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

export function goDown(path, itemName){
    return (path + itemName + "/")
}

export function goUp(path, steps){

    var newPath = path;

    for (var index = 0; index < steps; index++) {
        newPath = Path.dirname(newPath);
    }

    return newPath + "/";
}