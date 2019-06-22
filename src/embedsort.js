handleSortChange(ctx) {
    let that = this

    debugger
    that.items.sort((a, b) =>
        that.embedsort(a, b, that.nestedSortOrder)
    )
},

embedsort(a, b, [{ field, order }, ...rest]) {
    return a[field] < b[field]
        ? -Math.sign(order)
        : a[field] > b[field]
        ? Math.sign(order)
        : !rest.length
        ? 0
        : this.embedsort(a, b, rest)
},

module.export = (a, b) => {
    embedsort(a, b, that.nestedSortOrder)
}

//not sure how to allow this ?