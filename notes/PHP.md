---
layout: notes
published: true
---

# PHP General 
## Testing 
### Print out
```
echo '<pre>';
var_dump() 
echo '</pre>';
```
### Show all Errors 
```
error_reporting(E_ALL);
ini_set('display_errors', '1');
```
### Show Class Path 
```
$reflector = new ReflectionClass( 'ObjectName' );
echo $reflector->getFileName();    
```




## Variable 变量
###### var_dump()  //返回    数据类型  和值
```
$x = 5985;
var_dump($x);   // int(5985) 
echo PHP_EOL;     //   \n  换行符号
```

### local
### global 
    global $x,$y; 
    $GLOBALS['x'];  // 
### static  
    static x = 0;
    //每次调用该函数时，变量保留函数前一次值
parameter

## String
echo strlen("Hello World!");  // 12   字符串长度
echo strpos("Hello world!","world");
	// 6  查找字符
a.b    //连接两个字符
## 超级全局变量
### GLOBALS
```
$GLOBALS['z'];
```
### SERVER
```
echo "PHP_SELF: \n". $_SERVER['PHP_SELF'];
echo "<br>";
echo "SERVER_NAME: \n". $_SERVER['SERVER_NAME'];
echo "<br>";
echo "HTTP_HOST: \n". $_SERVER['HTTP_HOST'];
echo "<br>";
echo "HTTP_REFERER: \n". $_SERVER['HTTP_REFERER'];
echo "<br>";
echo "HTTP_USER_AGENT: \n". $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo "SCRIPT_NAME: \n". $_SERVER['SCRIPT_NAME'];
```
### REQUEST
收集form的数据
### POST
### GET


### FILES
### ENV
### COOKIE
### SESSION

## PHP预定义常量
### LINE
```    
__LINE__
echo '这是第 " '  . __LINE__ . ' " 行';
```
### FILE
    __FILE__		
### DIR
    __DIR__
### Function
    __FUNCTION__	//函数名
### Class

    __CLASS__
    __TRAIT__
### Trait
    __TRAIT__ 
```   	
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}
trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}
class MyHelloWorld extends Base {
    use SayWorld;
}
$o = new MyHelloWorld();
$o->sayHello();
```
### Method
__METHOD__
### Namespace
__NAMESPACE__

## Array数组
###### count()	//获取数组长度
```
$cars=array("AAA","BBB","CCC");
echo count($cars);    //  3
```

### array_values
显示array中第一个值
array_values($array)[0]

## 关联数组   => 
```
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
```
## forEach 遍历数组
```
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43"); 
foreach($age as $x=>$x_value) 
{ 
    echo "Key=" . $x . ", Value=" . $x_value; 
    echo "<br>"; 
}
```
sort() - 升序排列
rsort() - 降序排列
asort() - 根据数组的值，升序排列
ksort() - 根据数组的键，升序排列
arsort() - 根据数组的值，降序排列
krsort() - 根据数组的键，降序排列


## Email 
mail(to,subject,message,headers,parameters)
to	必需 规定 email 接收者。
subject 必需 规定 email 的主题。注释：该参数不能包含任何新行字符。
message 必需 定义要发送的消息。应使用 LF (\n) 来分隔各行。每行应该限制在 70 个字符内。
headers 可选 规定附加的标题，比如 From、Cc 和 Bcc。应当使用 CRLF (\r\n) 分隔附加的标题。
parameters	可选。对邮件发送程序规定额外的参数。


##Examples
### URl exist 
```
function urlExists($url=NULL)  {  
  if($url == NULL) return false;  
  $ch = curl_init($url);  
  curl_setopt($ch, CURLOPT_TIMEOUT, 5);  
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);  
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
  $data = curl_exec($ch);  
  $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);  
  curl_close($ch);  
  if($httpcode>=200 && $httpcode<300){  
      return true;  
  } else {  
      return false;  
  }  
}
if( urlExists('http://www.baidu.com/') ) 
echo "exist";
else echo 'no';
```

# Form 
##  $_Get
### Give Variable on URL
```
$MyGet=$_GET;$MyGet['type']='all'; echo http_build_query($MyGet);
```

# Others 
Data()
date("Y-m-d");

## Include, Require 
##### Include:  Warning错误发生后继续执行，及时包含文件丢失
    include 'header.php';
Require:  Error  错误发生后停止执行，较常使用
## Cocckie 
```
setcookie(name, value, expire, path, domain);
$_COOKIE
$_COOKIE["user"];
```
## Define 自定义常量 
define ( string $name , mixed $value [, bool $case_insensitive = false ] )
case_insensitive   // 可选，为true时大小写不敏感

```
define("ABCDEF ", "BBBBBBBBB");  
echo ABCDEF;    	// BBBBBBBBB
define("ABCDEF ", " BBBBBBBBB ", true);  // 大小写不敏感
echo abcdef;    // BBBBBBBBB
```


# WordPress 
###### pprint_r function 显示Object中全部内容
```
function Show($arrs) {
	$bt = debug_backtrace();
	$caller = array_shift($bt);
	echo '<pre>';
	echo '<h3>' .$caller['file']  .'</h3>';
	echo '<h3>Line:'.$caller['line'] .'</h3>';
	if(!empty($arrs)) {
		var_dump($arrs);
	} else {
		echo 'It is Empty ...';
	}
	echo '</pre>';
}
```
```
pprint_r($post);  
$meta = get_post_meta($post->ID, '',true);
```

### wp_mail  邮件
```
$to = "rfd3344@gmail.com";
$subject = "One Order is completed";
$content = "<h1>asdda</h1>";
$headers = array('Content-Type: text/html; charset=UTF-8');
$status = wp_mail($to, $subject, $content, $headers );
```


### 判断是不是 'administrator'
```
global $current_user;
if(in_array('administrator', $current_user->roles )){	
    echo 'administrator';
}
``` 

### Home Page
```
<?php echo get_home_url(); ?>  
```



#   Laravel 
##  Routes 

##  Blade 模版引擎

##  Controller 
app/Http/Controller 

##  Model
php artisan make:model Car --migration

## Middleware 
验证用户的身份认证

##  View
引入变量
```
$articles = Article::all();
return view('articles.index',compact('articles'));
```

##  Session
file - 将 Session 保存在 storage/framework/sessions 中
cookie - Session 保存在安全加密的 Cookie 中
database - Session 保存在关系型数据库中
memcached / redis - Sessions 保存在其中一个快速且基于缓存的存储系统中
array - Sessions 保存在 PHP 数组中，不会被持久化
$data = $request->session()->all();
session([‘httpcode’ => $httpcode]);
###  Show All Data
$data = $request->session()->all();
### Clear All Data
$request->session()->flush();
###  Put One Data
session( ['localcode' => $localcode]  );
### Get One Data 
$value = $request->session()->get('key');

## Request
use Illuminate\Http\Request;
获取当前路由 1 $uri = $request->path(); 2 $uri = $request->url(); 3 $uri = $request->fullUrl(); 4 $input = $request->all(); $method = $request->method(); // GET
if ($request->has(‘name’)) {}  //name 是否存在
##  Database
### get "'ip_address"  column 
$users  = DB::table('login_details')
->where('ip_address', $_SERVER['REMOTE_ADDR'] )
->get();  
### get "'ip_address"  first
$users  = DB::table('login_details')
->where('ip_address', $_SERVER['REMOTE_ADDR'] )
->first();  

## Command
npm run dev
npm run watch
###  Artisan
Show all Routes: 
php artisan route:list


## Mix 
mix.js('resources/assets/js/app.js', 'public/js');
mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.copy('public/js/app.js', '../temp/js/app.js');


## Vue in Laravel
###    Import Vue  in app.js
Vue.component('example', require('./components/example.vue'));
window.onload = function () {
    const example = new Vue({
        el:'#example'
    });
    const app = new Vue({
        el:'#app',
        components: {
        example,
        }
    });
}

## Form 
$submitted = Input::get('from');
$submitted = Input::all();

##  Example
Posts Page：
全部Posts 
单个Post
https://www.codecasts.com/blog/post/programming-with-laravel-5-model-controller-view-basic-workflow


