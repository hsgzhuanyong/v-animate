# v-animation

![alt demo](/examples/assets/demo.png)

# 安装
```shell
    npm install v-animation -S
```

# VAnimation是什么
VAnimation 是一款便捷易使用的vue的动画组件，它集成了强大的预设css3动画库[amiante.css](https://animate.style)。

# 效果预览
[预览链接](https://maikro-v.github.io/v-animation/index/index)

# 注册组件
### 1. 全局注册
> main.js
```javascript
  import Vue from 'Vue'
  import VAnimation from 'v-animation'
  
  Vue.use(VAnimation)
```
> app.vue
```vue
  <template>
    <v-animation name="bounce">
      v-animation
    </v-animation>
  </template>
  <script>
    export default {}
  </script>
```

### 属性 Attributes
___
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|<a href="#animationName">name</a>| 动画名称，可用数组方式设置多个 | Array/String | - |
|<a href="#animationDuration">duration</a>| 执行时长 | Number | - |
|<a href="#animationDelay">delay</a>| 延迟时长 | Number | - |
|<a href="#animationCount">count</a>| 执行次数，如果设置了infinite="true"，此属性无效 | Number | 1 |
|<a href="#animationInfinite">infinite</a>| 是否无限循环 | Boolean | false |

## name 设置动画名称 <a id="animationName"></a>
#### 1. 单个动画
```vue
<template>
  <v-animation name="bounce">
    v-animation
  </v-animation>
</template>
```

#### 2. 多个动画
```vue
<template>
  <v-animation :name="animationName">
    v-animation
  </v-animation>
</template>
<script>
export default {
  data() {
    return {
      animationName: ['bounce', 'backInUp']
    } 
  }
}
</script>
```

#### 3. 多个动画定义其它属性，优先级高于属性方式
```vue
<template>
  <v-animation :name="animationName">
    v-animation
  </v-animation>
</template>
<script>
export default {
  data() {
    return {
      animationName: [{
        name: 'bounce',
        duration: 3,
        infinite: true
      }]
    } 
  }
}
</script>
```

