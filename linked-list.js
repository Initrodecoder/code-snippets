class linkedlist {
  constructor() {
    this.head = null
  }

  addToHead(val) {
    const n = new node(val, this.head, null)
    if (this.head) {
      this.head.prev = n
    }
    this.head = n
  }

  search(value) {
    let currentNode = this.head
    let pos = 0
    while (currentNode) {
      pos = pos + 1
      if (currentNode.value === value) {
        return pos
      }
      currentNode = currentNode.next
    }
    return null
  }

  print() {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.next != null) console.log(currentNode.next)
      currentNode = currentNode.next
    }
  }
}

class node {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

const list = new linkedlist()
list.addToHead("test")
list.addToHead("test 1")
list.addToHead("test 2")
list.addToHead("test 3")
list.addToHead("test 4")
list.addToHead("test 5")

console.log(list.head.value)
console.log(list.head.next.value)
console.log(list.head.next.next.value)
console.log(list.search("test"))
console.log(list.search("test no"))
list.print()
