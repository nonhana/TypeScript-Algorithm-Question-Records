# 前言

最近准备好好开始刷leetcode了，而刷题之余写一些总结性质的东西我也觉得是非常有必要的。

最近刚好在回顾题目的时候看到了二数之和、三数之和、四数之和等等的题目，并且它们的解决方式都十分的类似，因此想着趁这个机会进行一些总结。

当然之后也会总结一些其他性质的题目，这次写文当作是一个开端吧，我希望我的算法水平能在日积月累中取得一些成效~~

# 二数之和

这道题目在leetcode上是排名No.1，可见是无数入门算法的同学们的初见，对其感情之深（T v T）当然刚刚开始我也一头雾水没啥思路。

**我觉得对于算法题而言，最重要的就是看到这个题目之后你要有思路怎么去解决。无论是数据结构、还是采用什么算法，都需要脑海里面蹦出来有一个解决这个问题的想法然后再付诸行动**。 当然这个思路也是刷题刷出来的。

## 题目

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回 [0, 1]。

## 解答

我们首先看这个题目，其实很简单，就是从一个数组中找到一个组合，让这个组合中的值和为target。

那么很简单啊，直接来个循环遍历不就可以了？外一层里一层for循环不断相加，判断和是否为target即可。

当然这样是没问题！你可以很顺畅的写出来，但是这样子放在leetcode上面是通不过的，因为这个两数的时间复杂度就达到 $n^2$ 了，leetcode上面的测试用例后面还涉及到巨量的数据，这怎么跑得通呢？

况且后面还有三、四、五数之和，两数的就得 $n^2$  ，三数的岂不是得 $n^3$ ？

**先讲个结论：遇到这种你的第一直觉是循环遍历解决的问题，核心思路应该是怎么降低遍历次数。**

对于这种n数之和的问题而言，是可以将原本的循环次数给降低一个维度的。

我们先来看看正常的1维循环写法（2维的太过于无脑，在这里不写了）：

```typescript
function twoSum1(nums: number[], target: number): number[] {
  // 1维循环算法
  // 1. 将nums从小到大排列
  nums.sort((a, b) => a - b);

  // 2. 定义变量
  const length: number = nums.length;
  let end: number = length - 1;
  const resArr: number[] = [];

  // 3. 遍历数组
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (nums[i] + nums[end] > target) {
      end--;
    }
    if (nums[i] + nums[end] === target) {
      resArr.push(i, end);
      break;
    }
  }
  return resArr;
}
```

首先调用数组的 `sort` 方法，将 `nums` 数组从小到大排序。

然后定义了三个变量：`length` 用于存储 `nums` 数组的长度；`end` 初始化为 `nums` 数组的最后一个元素的索引；`resArr` 是一个空数组，用于存储结果。

接下来，函数使用一个 `for` 循环遍历 `nums` 数组。在每次循环中，首先检查当前元素是否与前一个元素相同，如果相同，则跳过当前循环，进入下一次循环。因为在排序后的数组中，相同的元素会被放在一起，如果当前元素与前一个元素相同，那么它们的和肯定已经被计算过了。

然后使用一个 `while` 循环，不断地将 `end` 减 1，直到 `nums[i] + nums[end]` 的值不大于 `target`。这是因为 `nums` 数组已经被排序，所以如果 `nums[i] + nums[end]` 的值大于 `target`，那么只能通过减小 `end` 来减小它们的和。

最后，如果 `nums[i] + nums[end]` 的值等于 `target`，那么就将 `i` 和 `end` 添加到 `resArr` 数组中，并跳出 `for` 循环。

函数最后返回 `resArr` 数组，即包含两个和为 `target` 的元素的索引的数组。

**这个就是n数之和的模板套路写法！** 梳理一下整个解题的步骤：

1. 首先对传进来的数组进行从小到大的排序，便于之后的遍历。因为已知整个数组是从小到大的，我们可以从小开始遍历，然后取最大的开始进行相加，最后逐层的进行拟合。
2. 然后定义变量，主要的变量有：
   1. 数组长度length
   2. 指针。这个指针按照是n数循环的问题，定义n-1个即可。
   3. 存储结果的数组resArr。
3. 对整个nums数组进行最外层循环，遇到nums[i]和nums[i-1]相等的，直接跳过即可。
4. 在每一次的循环内部，遵循一个规律：只根据拟合结果同时改变最后两个指针的值，前面的n-3个指针全部都是根据for循环自身来改变。也就是说，这样子可以把原本的全部for循环给降低一层维度。

是不是还是有点云里雾里的？可以看一下三数之和的写法。

> 在这里我再附加一个对于特定的二数之和问题的哈希表写法——借助Map的get、set方法来实现对于target - nums[i]的查找。
>
> 这个Map的key是这个nums数组中的数据值，value是这个数据对应的nums数组的下标。这样子只要get对应的value，就可以直接拿到其对应的下标了。
>
> 所以我们只用一次遍历，然后直接使用get看看能不能拿得到target-nums[i]的下标，能拿到就代表找到了。在这里也给出对应的算法代码：
>
> ```typescript
> function twoSum(nums: number[], target: number): number[] {
>   // 1. 生成一个ma  p，key为nums的值，value为nums的下标
>   let helperMap: Map<number, number> = new Map();
>   // 2. 定义一个变量，用来存储map中是否存在target - nums[i]的值
>   let index: number | undefined;
>   // 3. 定义结果数组
>   let resArr: number[] = [];
> 
>   for (let i = 0; i < nums.length; i++) {
>     index = helperMap.get(target - nums[i]);
>     if (index !== undefined) {
>       resArr = [i, index];
>     }
>     helperMap.set(nums[i], i);
>   }
>   return resArr;
> }
> ```

# 三数之和

## 题目

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意： 答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

## 解答

可以看到，三数之和要求我们返回的是全部的符合条件的三元组集合，返回形式是矩阵的形式。因此我们就必须得进行遍历，不然是根本找不出所有的组合。

我们可以按照上述方法如法炮制：

```typescript
function threeSum(nums: number[]): number[][] {
  // 1. 对原数组进行排序(从小到大)，便于之后遍历
  nums.sort((a, b) => a - b);

  // 2. 定义变量：数组长度，左指针，右指针，结果数组
  let length = nums.length;
  let left: number = 0; // 最左端
  let right: number = length - 1; // 最右端
  let resArr: number[][] = []; // 存放结果的数组

  // 3. 遍历数组
  for (let i = 0; i < length; i++) {
    // 特殊情况（两种）：
    // 3.1 nums经过排序后，只要nums[i]>0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环。
    if (nums[i] > 0) {
      return resArr;
    }
    // 3.2 如果当前值与前一个值相同，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 3.3 更改左指针和右指针的值，缩小范围
    left = i + 1;
    right = length - 1;
    while (left < right) {
      // 3.4 如果三数之和等于0，则将结果添加到结果数组中
      let total: number = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        resArr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // 如果左/右指针的值与前/后一个值相同，则跳过
        while (nums[right] === nums[right + 1]) {
          right--;
        }
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return resArr;
}
```

可以看到，是非常公式化的模板，唯一需要注意的就是3.3步开始的while循环判断。需要对left < right进行判断，因为left和right都是同时的进行右移/左移的。直到它们俩相遇，这一层的遍历才算是结束，开启下一个循环的遍历。

# 四数之和、五数之和、...

按照上述方法，我们其实也就很简单的可以写出四、五、n数之和的公式化写法。在这里给出四数之和的写法：

```typescript
function fourSum(nums: number[], target: number): number[][] {
  // 1. 对原数组进行排序
  nums.sort((a, b) => a - b);

  // 2. 定义变量：数组长度，第一个指针，第二个指针，第三个指针，第四个指针，结果数组
  let first: number = 0,
    second: number,
    third: number,
    fourth: number;
  let length: number = nums.length;
  let resArr: number[][] = [];

  // 3. 遍历数组
  for (; first < length; first++) {
    // 3.1 如果当前值与前一个值相同，则跳过
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    // 3.2 更改第二个指针的值，缩小范围，并基于第二个指针遍历数组
    for (second = first + 1; second < length; second++) {
      // 也是跳过重复的值
      if (second - first > 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      third = second + 1;
      fourth = length - 1;
      while (third < fourth) {
        let total: number =
          nums[first] + nums[second] + nums[third] + nums[fourth];
        if (total === target) {
          resArr.push([nums[first], nums[second], nums[third], nums[fourth]]);
          third++;
          fourth--;
          while (nums[third] === nums[third - 1]) third++;
          while (nums[fourth] === nums[fourth + 1]) fourth--;
        } else if (total < target) {
          third++;
        } else {
          fourth--;
        }
      }
    }
  }
  return resArr;
}
```

可见基本的模板都是相同的。

# 总结

n数之和的套路十分单纯： **减少循环的嵌套层数** 。虽然对于最后的n数问题，最理想的全遍历减少嵌套次数只能是一层，不过也是目前效率最高的一种解法。

由于我本人几乎没什么机会接触一些真正的算法相关知识，所以我只能在这个小博客进行一些比较粗浅的经验记录~如果有不合理的地方，希望浏览到这个文章的大家能够多多留言哈哈！

**之后打算理一理链表相关的问题。**