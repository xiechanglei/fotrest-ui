export  const insertElement = (where: InsertPosition, parentNode: HTMLElement , ...nodes: any[]) => {
    nodes.forEach(ele => {
        if (ele instanceof HTMLElement) {
            parentNode.insertAdjacentElement(where, ele)
        } else {
            parentNode.insertAdjacentText(where, ele)
        }
    })
}