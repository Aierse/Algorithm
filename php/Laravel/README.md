# Laravel

## 폴더

### routes

#### web.php
routes/web.php 에 정의된 라우트는 브라우저를 통해서 유입되는 라우트 URL을 정의하는데 사용된다.  
라우터는 다음의 HTTP 메서드에 해당하는 응답을 위한 라우트를 등록할 수 있다.
```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```
예를 들어 브라우저에서 http://localhost:8000/hello 에 같이 접속하기 위해서 다음의 라우트를 정의할 수 있다.
```php
Route::get('/hello', function () {
 return 'hello world!';
};
```
해당 페이지는 'hello world! 만을 리턴하는 페이지이다.  
여러개의 HTTP 메소드에 응답하는 라우트를 등록하고 싶다면 match를 사용할 수 있다.
```php
Route::match(['get', 'post'], '/', function () {
    // ...
})
```
모든 HTTP 메소드에 응답하고 싶은 라우트를 등록하고 싶다면 any를 사용한다.
```php
Route::any('/', function () {
    //
});
```
**동일한 URI를 공유하는 여러개의 라우트를 정의해야할 때에는 get, post, put, patch, delete, options 메서드를 any, match, redirect 메서드보다 먼저 정의해야한다.**.  
**순서가 바뀔 경우 any, match, redirect가 HTTP 메소드를 먼저 처리하여 의도대로 동작하지 않을 수 있다.**
