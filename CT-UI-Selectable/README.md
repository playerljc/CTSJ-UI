# CTSJ-UI-Selectable
支持PC的UI组件-Selectable










配置:
el
{
   moveInclude: Function(Array<HtmlElement>) 选取到的元素
   moveExclude: Function(Array<HtmlElement>) 未选取的元素
   upInclude: Function(Array<HtmlElement>) 选取结束后选取的元素
   rangeClasses: Array<String> 选取框的样式
}

布局:
  <div>
    <div class="ct-selectable-item"></div>
    ...
  </div>

功能:
  在一个区域内进行选取，区域内带有ct-selectable-item样式的元素会参与计算
  圈选中获取选中和非选中的元素，选取结束获取选取的元素
  
测试:

log:
  .无限拖拽，可以脱出父窗口
 
demo:
 .一个normal
 .二个互补影响的选区
 