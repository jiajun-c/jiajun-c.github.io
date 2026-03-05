---
title: "TypeScript 高级技巧"
date: 2026-02-28
category: tech
tags: ["typescript", "javascript", "web"]
description: "探索 TypeScript 的高级类型特性和最佳实践"
draft: false
---

# TypeScript 高级技巧

## 泛型约束

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("hello"); // ✅
loggingIdentity(3);       // ❌ number 没有 length 属性
```

## 条件类型

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

## 映射类型

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; }
```

## 工具类型

### Partial
```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### Pick
```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### Omit
```typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

## 类型守卫

```typescript
function isString(x: unknown): x is string {
  return typeof x === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    // x 被推断为 string
    return x.toUpperCase();
  }
}
```

## 最佳实践

1. **使用严格模式**：在 tsconfig.json 中启用 `strict: true`
2. **避免 `any`**：使用 `unknown` 替代
3. **善用类型推断**：不必处处显式标注类型
4. **接口优先**：优先使用 `interface` 而非 `type`

---
*发布于 2026-02-28 | 分类：tech | 标签：typescript, javascript, web*
