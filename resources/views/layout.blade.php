<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>App</title>
        <link rel="stylesheet" href="/css/app.css" media="screen" title="no title">
        @yield('css')
    </head>
    <body>
        <div class="container">
            @yield('content')
        </div>
        @yield('js')
    </body>
</html>