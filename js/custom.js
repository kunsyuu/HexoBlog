// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        //top: 60,
        //max: true,
        width: "98%",
        height: "90%",
        //minwidth: '300px',
        //height: "60%",
        //background: '#f21f8c',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#f21f8c;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 恢复默认背景</button></p>
    <h2 id="手机端"><a href="#手机端" class="headerlink" title="手机端"></a>手机端</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/1nvSykNdbHRceIM.webp)" class="pimgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/1nvSykNdbHRceIM.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/IHqWLyvnYChpAzm.webp)" class="pimgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/IHqWLyvnYChpAzm.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/k8zv2OgjRDprcHq.webp)" class="pimgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/k8zv2OgjRDprcHq.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/qeCyd4EjLWm3B16.webp)" class="pimgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/qeCyd4EjLWm3B16.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/1xNmfypk72YwnS9.webp)" class="pimgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/1xNmfypk72YwnS9.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/omb3OCS9IT6jKUf.webp)" class="pimgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/omb3OCS9IT6jKUf.webp)')"></a>
    </div>
    
    <h2 id="电脑端"><a href="#电脑端" class="headerlink" title="电脑端"></a>电脑端</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/hzkd13DHAswoN7j.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/hzkd13DHAswoN7j.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/41HhAjNwUvopGBf.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/41HhAjNwUvopGBf.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/ZhpiwSYKVURHoPe.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/ZhpiwSYKVURHoPe.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/bNceo3v2wFu9rhz.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/bNceo3v2wFu9rhz.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/AS614i9cqJlTypf.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/AS614i9cqJlTypf.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/07/6fn4Nx9IbisjoyO.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/07/6fn4Nx9IbisjoyO.webp)')"></a>
    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}





window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result + '%';
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}
