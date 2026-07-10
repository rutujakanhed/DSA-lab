import { Experiment, FacultyMember, GalleryItem, ReferenceBook, OnlineResource } from './types';

export const experiments: Experiment[] = [
  {
    id: 'arrays',
    title: 'Arrays & Operations',
    category: 'Linear Data Structures',
    icon: 'Grid',
    shortDesc: 'Implement basic array operations: insertion, deletion, search, and element traversal.',
    objective: 'To understand the contiguous memory allocation of arrays and implement operations like inserting an element at a given index, deleting from an index, and traversing elements.',
    algorithm: [
      'For Insertion: Shift all elements from the target index to the right by one position, then place the new element.',
      'For Deletion: Shift all elements to the left of the deleted index by one position to close the gap.',
      'For Search: Traverse the array linearly or perform binary search if sorted.'
    ],
    pseudocode: `// Insertion at index k
procedure insert(Array A, int n, int element, int k)
  for i from n-1 down to k do
    A[i+1] = A[i]
  A[k] = element
  n = n + 1
end procedure`,
    complexity: {
      time: 'Insertion/Deletion: O(n), Access: O(1)',
      space: 'O(1) auxiliary space'
    }
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    category: 'Linear Data Structures',
    icon: 'GitCommit',
    shortDesc: 'Implement Singly, Doubly, and Circular Linked Lists with fundamental node operations.',
    objective: 'To dynamically allocate memory using nodes and link them using pointers. Implement operations like insert at head, insert at tail, delete node, and traverse.',
    algorithm: [
      'Create a Node class containing data and a next pointer (and previous pointer for Doubly LinkedList).',
      'Insertion: Create a new node, adjust pointers of adjacent nodes to reference the new node.',
      'Deletion: Adjust pointers of the preceding node to point to the node following the deleted node, then free memory.'
    ],
    pseudocode: `// Insert Node at the End
procedure insertEnd(Node head, int value)
  Node newNode = createNode(value)
  if head is null then
    head = newNode
  else
    Node temp = head
    while temp.next is not null do
      temp = temp.next
    temp.next = newNode
end procedure`,
    complexity: {
      time: 'Insertion/Deletion: O(1) if pointer is known, O(n) if searching',
      space: 'O(n) for n elements'
    }
  },
  {
    id: 'stacks',
    title: 'Stacks',
    category: 'Linear Data Structures',
    icon: 'Layers',
    shortDesc: 'Implement stack using arrays and linked lists (LIFO - Last In First Out principle).',
    objective: 'To master the Last-In-First-Out mechanism. Write routines for Push, Pop, Peek, and checking IsEmpty or IsFull states.',
    algorithm: [
      'Maintain a top pointer initialized to -1 (for array implementations).',
      'Push: Verify stack is not full, increment top, and store the value.',
      'Pop: Verify stack is not empty, retrieve the value at top, and decrement top.'
    ],
    pseudocode: `// Push operation
procedure push(Stack S, int value)
  if S.top >= MAX_SIZE - 1 then
    print "Stack Overflow"
  else
    S.top = S.top + 1
    S.array[S.top] = value
end procedure`,
    complexity: {
      time: 'Push, Pop, Peek: O(1)',
      space: 'O(n) total space'
    }
  },
  {
    id: 'queues',
    title: 'Queues',
    category: 'Linear Data Structures',
    icon: 'ArrowRightLeft',
    shortDesc: 'Implement linear, circular, and priority queues (FIFO - First In First Out principle).',
    objective: 'To explore First-In-First-Out behavior. Build enqueue (insert at rear) and dequeue (remove from front) operations.',
    algorithm: [
      'Maintain front and rear pointers.',
      'Enqueue: Check if queue is full. Increment rear pointer (circularly if circular queue), insert element.',
      'Dequeue: Check if queue is empty. Retrieve front element, increment front pointer.'
    ],
    pseudocode: `// Enqueue operation in Circular Queue
procedure enqueue(Queue Q, int value)
  if (Q.rear + 1) % MAX_SIZE == Q.front then
    print "Queue Full"
  else
    if Q.front == -1 then Q.front = 0
    Q.rear = (Q.rear + 1) % MAX_SIZE
    Q.array[Q.rear] = value
end procedure`,
    complexity: {
      time: 'Enqueue and Dequeue: O(1)',
      space: 'O(n) space'
    }
  },
  {
    id: 'trees',
    title: 'Binary Search Trees',
    category: 'Non-Linear Data Structures',
    icon: 'Network',
    shortDesc: 'Implement Binary Search Trees (BST) with inorder, preorder, and postorder traversals.',
    objective: 'To study tree properties. Build functions to insert, delete, search, and perform tree traversals (Inorder, Preorder, Postorder) recursively.',
    algorithm: [
      'For Insertion: Start at root, go left if value is less than current node, right if greater. Repeat until a null spot is found.',
      'Traversals: Inorder (Left, Root, Right), Preorder (Root, Left, Right), Postorder (Left, Right, Root).'
    ],
    pseudocode: `// Inorder Traversal
procedure inorder(Node root)
  if root is not null then
    inorder(root.left)
    print root.data
    inorder(root.right)
end procedure`,
    complexity: {
      time: 'Search/Insertion: O(h) where h is height (O(log n) balanced, O(n) worst case)',
      space: 'O(h) for call stack'
    }
  },
  {
    id: 'graphs',
    title: 'Graphs & Traversals',
    category: 'Non-Linear Data Structures',
    icon: 'Share2',
    shortDesc: 'Represent graphs using adjacency matrices or lists, and implement BFS and DFS.',
    objective: 'To explore multi-node connectivity. Implement Breadth-First Search (using a queue) and Depth-First Search (using recursion/stack).',
    algorithm: [
      'BFS: Use a queue. Visit start node, enqueue it, mark as visited. Dequeue, visit its unvisited neighbors, enqueue them, repeat until empty.',
      'DFS: Use a recursive call or explicit stack. Visit start node, mark visited. For each unvisited neighbor, call DFS recursively.'
    ],
    pseudocode: `// Breadth First Search
procedure BFS(Graph G, int startVertex)
  let Q be a queue
  mark startVertex as visited
  Q.enqueue(startVertex)
  while Q is not empty do
    v = Q.dequeue()
    for each neighbor w of v do
      if w is not visited then
        mark w as visited
        Q.enqueue(w)
end procedure`,
    complexity: {
      time: 'BFS / DFS: O(V + E) where V is vertices, E is edges',
      space: 'O(V) for visited array and queue/stack'
    }
  },
  {
    id: 'searching',
    title: 'Searching Algorithms',
    category: 'Algorithms',
    icon: 'Search',
    shortDesc: 'Compare Linear Search and Binary Search performance on sorted data.',
    objective: 'To understand optimal data querying. Perform a comparison between a sequential O(n) lookup and a divide-and-conquer O(log n) lookup.',
    algorithm: [
      'Linear Search: Examine each element of the array sequentially.',
      'Binary Search: Compare element with mid. If equal, return index. If element is smaller, search left half; if larger, search right half. Requires sorted data.'
    ],
    pseudocode: `// Binary Search (Iterative)
procedure binarySearch(Array A, int target)
  low = 0, high = A.length - 1
  while low <= high do
    mid = low + (high - low) / 2
    if A[mid] == target then return mid
    else if A[mid] < target then low = mid + 1
    else high = mid - 1
  return -1 // Not found
end procedure`,
    complexity: {
      time: 'Linear: O(n), Binary: O(log n)',
      space: 'O(1) space'
    }
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    category: 'Algorithms',
    icon: 'ArrowUpDown',
    shortDesc: 'Implement and analyze Bubble, Selection, Insertion, Merge, and Quick Sort.',
    objective: 'To master sorting techniques. Contrast O(n²) comparison-based sorts with O(n log n) divide-and-conquer methodologies.',
    algorithm: [
      'Bubble Sort: Repeatedly swap adjacent elements if they are in the wrong order.',
      'Merge Sort: Divide array into halves, sort them recursively, and merge the sorted halves.',
      'Quick Sort: Choose a pivot, partition elements around the pivot, and sort the sub-arrays.'
    ],
    pseudocode: `// QuickSort Partitioning
procedure partition(Array A, low, high)
  pivot = A[high]
  i = low - 1
  for j = low to high - 1 do
    if A[j] < pivot then
      i = i + 1
      swap A[i] with A[j]
  swap A[i+1] with A[high]
  return i + 1
end procedure`,
    complexity: {
      time: 'Merge/Quick: O(n log n), Bubble: O(n²)',
      space: 'Merge: O(n), Quick: O(log n) for call stack'
    }
  },
  {
    id: 'hashing',
    title: 'Hashing & Collisions',
    category: 'Algorithms',
    icon: 'Hash',
    shortDesc: 'Implement hash tables with collision resolution strategies like chaining and open addressing.',
    objective: 'To design dictionaries for constant-time lookups. Learn collision resolving via Chaining (linked lists) or Linear/Quadratic probing.',
    algorithm: [
      'Compute hash key: index = key % capacity.',
      'If index is occupied: Chain the value in a linked list at that index (Chaining) or look for the next vacant slot (Linear Probing).'
    ],
    pseudocode: `// Chaining Insertion
procedure hashInsert(HashTable T, int key, string value)
  index = hashFunction(key)
  Node newNode = createNode(key, value)
  if T[index] is null then
    T[index] = newNode
  else
    newNode.next = T[index]
    T[index] = newNode
end procedure`,
    complexity: {
      time: 'Average: O(1), Worst Case: O(n) if all elements collide',
      space: 'O(n) space'
    }
  },
  {
    id: 'recursion',
    title: 'Recursion & Backtracking',
    category: 'Algorithms',
    icon: 'RotateCcw',
    shortDesc: 'Solve classical problems such as Tower of Hanoi, Fibonacci, and N-Queens recursively.',
    objective: 'To solve problems by dividing them into simpler sub-problems of the same form, utilizing call-stack frame allocations.',
    algorithm: [
      'Define a base case to terminate execution.',
      'Define a recursive step to progress toward the base case.',
      'In backtracking (like N-Queens), undo the state choices if they lead to an invalid dead end.'
    ],
    pseudocode: `// Tower of Hanoi
procedure solveHanoi(int diskCount, char source, char helper, char target)
  if diskCount == 1 then
    print "Move disk 1 from " + source + " to " + target
    return
  solveHanoi(diskCount - 1, source, target, helper)
  print "Move disk " + diskCount + " from " + source + " to " + target
  solveHanoi(diskCount - 1, helper, source, target)
end procedure`,
    complexity: {
      time: 'Tower of Hanoi: O(2ⁿ), Fibonacci: O(2ⁿ) without memoization',
      space: 'O(depth of recursion tree)'
    }
  }
];

export const facultyList: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Carter',
    designation: 'Professor & Lab Director',
    qualification: 'Ph.D. in Computer Science (MIT)',
    expertise: 'Advanced Algorithms & Complexity Theory',
    email: 'evelyn.carter@college.edu',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '2',
    name: 'Prof. Marcus Vance',
    designation: 'Associate Professor',
    qualification: 'M.S. in Computer Engineering (Stanford)',
    expertise: 'Parallel Computing & Graph Theory',
    email: 'marcus.vance@college.edu',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '3',
    name: 'Dr. Sarah Lin',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Operations Research (UC Berkeley)',
    expertise: 'Dynamic Programming & Network Flows',
    email: 'sarah.lin@college.edu',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '4',
    name: 'Prof. Alan Turing Jr.',
    designation: 'Lead Laboratory Instructor',
    qualification: 'M.Tech in Software Systems (IIT)',
    expertise: 'Data Structures Implementations in C++/Java/Python',
    email: 'alan.t@college.edu',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Advanced Computing Lab Workspace',
    category: 'lab',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600&h=450'
  },
  {
    id: 'g2',
    title: 'Annual Coding Hackathon in Session',
    category: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=450'
  },
  {
    id: 'g3',
    title: 'DSA Lecture and Whiteboard Session',
    category: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=450'
  },
  {
    id: 'g4',
    title: 'Modern Workstations Configuration',
    category: 'infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=450'
  },
  {
    id: 'g5',
    title: 'Faculty-Student Collaborative Code Review',
    category: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=450'
  },
  {
    id: 'g6',
    title: 'Dedicated Algorithmic Discussion Room',
    category: 'infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&h=450'
  }
];

export const referenceBooks: ReferenceBook[] = [
  {
    title: 'Introduction to Algorithms (CLRS)',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    publisher: 'MIT Press (4th Edition)'
  },
  {
    title: 'Data Structures and Algorithm Analysis in C++',
    author: 'Mark Allen Weiss',
    publisher: 'Pearson (4th Edition)'
  },
  {
    title: 'Algorithms',
    author: 'Robert Sedgewick, Kevin Wayne',
    publisher: 'Addison-Wesley Professional'
  },
  {
    title: 'Data Structures and Algorithms in Python',
    author: 'Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser',
    publisher: 'John Wiley & Sons'
  }
];

export const onlineResources: OnlineResource[] = [
  {
    title: 'GeeksforGeeks - Data Structures',
    url: 'https://www.geeksforgeeks.org/data-structures/',
    type: 'documentation',
    description: 'Comprehensive tutorials, practice problems, and explanations of all linear and non-linear data structures.'
  },
  {
    title: 'LeetCode practice platform',
    url: 'https://leetcode.com/',
    type: 'practice',
    description: 'Excellent platform to solve technical interview questions and practice array, tree, and string manipulation.'
  },
  {
    title: 'HackerRank - Problem Solving Track',
    url: 'https://www.hackerrank.com/domains/algorithms',
    type: 'practice',
    description: 'Solve competitive challenges and test your foundational mathematical and algorithm design skills.'
  },
  {
    title: 'MIT OpenCourseWare - Introduction to Algorithms',
    url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/',
    type: 'video',
    description: 'Full video lectures, assignments, and notes from MIT faculty covering dynamic programming, sorting, and graphs.'
  },
  {
    title: 'Visualgo.net - Visualizing Data Structures',
    url: 'https://visualgo.net/',
    type: 'documentation',
    description: 'Beautiful interactive animations that visualize algorithm runs step-by-step for educational purposes.'
  }
];
