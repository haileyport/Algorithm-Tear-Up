function solution(info, edges) {
  var answer = 0;

  //양 모으기
  //단, 늑대가 같거나 더 많아지면 양을 다 먹음

  //노드에 존재하는 양/늑대 정보 info (양 0, 늑대 1)
  //이진트리 노드 관계 edges (갈 수 있는 곳 >> [출발지, 도착지])
  //0번은 항상 양
  //edge.length === info.length - 1

  //최대로 모을 수 있는 양은 몇 마리?

  class treeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class insertNode {
    constructor() {
      this.root = null;
    }

    insert(data) {
      let node = new treeNode(data);

      if (!this.root) {
        this.root = node;
        return this;
      }

      let current = this.root;

      while (current) {
        if (data === current.data) return;
        if (data < current.data) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        }
        if (data > current.data) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  let information = new insertNode();
  information.insert(0);
  information.insert(1);
  information.insert(2);

  console.log(information);

  return answer;
}

//이게 아닌 거 같다... 걍 실패
