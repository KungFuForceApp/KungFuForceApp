const WEBSITE_NAME = 'KungFuForceApp';

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,
        includedLanguages: 'en,es,fr,de,zh-CN,ja'
    }, 'google_translate_element');
    
    const storageKey = `${WEBSITE_NAME}/language`;
    const savedLang = localStorage.getItem(storageKey);
    
    if (savedLang && savedLang !== 'en') {
        setTimeout(() => {
            applyLanguage(savedLang);
        }, 1000);
    } else if (!savedLang) {
        localStorage.setItem(storageKey, 'en');
    }
}

function ChangeLanguage(lang) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        localStorage.setItem(`${WEBSITE_NAME}/language`, lang);
    }
}

function applyLanguage(lang) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
    }
}

setInterval(() => {
    document.querySelectorAll('iframe').forEach(frame => {
        if (frame.style.height === '0px' || frame.className.includes('goog-te-banner')) {
            frame.remove();
        }
    });
}, 1000);

const script = document.createElement('script');
script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.body.appendChild(script);