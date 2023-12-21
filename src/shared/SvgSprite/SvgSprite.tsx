import {ISvgSprite} from './SvgSprite.types';

export function SvgSprite({type, className, color = "var(--color-neutral-900)"}: ISvgSprite) {
    switch (type) {
        case 'logo':
            return (
                <svg
                    width='161'
                    height='43'
                    viewBox='0 0 161 43'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M58.1063 37.6086V39.6096H57.5252V39.2015H57.5179C57.2999 39.5012 56.944 39.6529 56.4464 39.6529C56.1013 39.6529 55.8289 39.5735 55.6364 39.4109C55.4439 39.2484 55.3458 39.01 55.3458 38.6886C55.3458 38.3635 55.4657 38.1215 55.709 37.9626C55.9524 37.8037 56.3338 37.7242 56.8568 37.7242C56.8714 37.7242 57.0748 37.7351 57.4634 37.7567V37.522C57.4634 37.2908 57.4017 37.1283 57.2782 37.0307C57.1547 36.9332 56.944 36.8863 56.6498 36.8863C56.2866 36.8863 55.956 36.9441 55.6582 37.0596V36.5901C55.9924 36.4745 56.3556 36.4167 56.7442 36.4167C57.2673 36.4167 57.6232 36.507 57.8194 36.6876C58.0119 36.8718 58.1063 37.1788 58.1063 37.6086ZM57.4634 38.4466V38.1757C57.3326 38.154 57.1547 38.1432 56.9295 38.1432C56.588 38.1432 56.3519 38.1829 56.2212 38.266C56.0904 38.3491 56.025 38.4755 56.025 38.6489C56.025 39.0064 56.2321 39.187 56.6462 39.187C57.191 39.187 57.4634 38.9378 57.4634 38.4466Z'
                        fill='black'
                    />
                    <path
                        d='M60.558 39.6565C60.4599 39.6565 60.3619 39.642 60.2638 39.6131V39.1183C60.3219 39.1364 60.3728 39.1436 60.42 39.1436C60.6379 39.1436 60.7868 38.9847 60.8667 38.6632C60.9467 38.3418 60.9866 37.7422 60.9866 36.8646V36.4636H63.3439V39.6168H62.701V36.9332H61.5932V37.0993C61.5932 37.7711 61.5605 38.2912 61.4915 38.6596C61.4225 39.028 61.3171 39.2881 61.1718 39.4362C61.0266 39.5806 60.8232 39.6565 60.558 39.6565Z'
                        fill='black'
                    />
                    <path
                        d='M66.4895 36.4602V37.9194L67.837 36.4602H68.6216L67.1796 37.9447L68.7851 39.6133H67.9569L66.4931 38.0386V39.6133H65.8502V36.4602H66.4895Z'
                        fill='black'
                    />
                    <path
                        d='M72.1267 39.6566C71.0552 39.6566 70.5212 39.1185 70.5212 38.0385C70.5212 36.9586 71.0552 36.4204 72.1267 36.4204C72.6642 36.4204 73.0674 36.5504 73.3326 36.8105C73.5977 37.0705 73.7321 37.4787 73.7321 38.0421C73.7321 38.5803 73.5941 38.9884 73.318 39.2557C73.042 39.523 72.6424 39.6566 72.1267 39.6566ZM72.1267 39.1871C72.4427 39.1871 72.6751 39.1004 72.8241 38.9234C72.973 38.75 73.0493 38.4539 73.0493 38.0349C73.0493 37.6159 72.9766 37.3198 72.8313 37.1464C72.686 36.973 72.4499 36.8864 72.1267 36.8864C71.8179 36.8864 71.5855 36.973 71.4329 37.15C71.2804 37.327 71.2041 37.6196 71.2041 38.0385C71.2041 38.8042 71.5128 39.1871 72.1267 39.1871Z'
                        fill='black'
                    />
                    <path
                        d='M76.7032 36.9297V39.6133H76.0603V36.4602H78.2868V36.9297H76.7032Z'
                        fill='black'
                    />
                    <path
                        d='M81.6975 39.6566C80.626 39.6566 80.092 39.1185 80.092 38.0385C80.092 36.9586 80.626 36.4204 81.6975 36.4204C82.235 36.4204 82.6382 36.5504 82.9034 36.8105C83.1685 37.0705 83.3029 37.4787 83.3029 38.0421C83.3029 38.5803 83.1649 38.9884 82.8888 39.2557C82.6128 39.523 82.2132 39.6566 81.6975 39.6566ZM81.6975 39.1871C82.0135 39.1871 82.2459 39.1004 82.3949 38.9234C82.5438 38.75 82.6201 38.4539 82.6201 38.0349C82.6201 37.6159 82.5474 37.3198 82.4021 37.1464C82.2568 36.973 82.0207 36.8864 81.6975 36.8864C81.3887 36.8864 81.1563 36.973 81.0037 37.15C80.8512 37.327 80.7749 37.6196 80.7749 38.0385C80.7749 38.8042 81.08 39.1871 81.6975 39.1871Z'
                        fill='black'
                    />
                    <path
                        d='M85.5803 39.6565C85.4823 39.6565 85.3842 39.642 85.2861 39.6131V39.1183C85.3442 39.1364 85.3951 39.1436 85.4423 39.1436C85.6602 39.1436 85.8092 38.9847 85.8891 38.6632C85.969 38.3418 86.0089 37.7422 86.0089 36.8646V36.4636H88.3662V39.6168H87.7234V36.9332H86.6155V37.0993C86.6155 37.7711 86.5828 38.2912 86.5138 38.6596C86.4448 39.028 86.3395 39.2881 86.1942 39.4362C86.0489 39.5806 85.8455 39.6565 85.5803 39.6565Z'
                        fill='black'
                    />
                    <path
                        d='M92.2418 39.6133H90.8688V36.4602H91.5117V37.5835H92.1328C92.6013 37.5835 92.9537 37.6593 93.1861 37.8074C93.4186 37.9555 93.5348 38.2191 93.5348 38.5876C93.5348 38.9271 93.4186 39.1799 93.1861 39.3497C92.9537 39.5194 92.6413 39.6133 92.2418 39.6133ZM91.5044 38.0566V39.1438H92.1618C92.3979 39.1438 92.5759 39.1005 92.6849 39.0102C92.7975 38.9199 92.852 38.779 92.852 38.5803C92.852 38.3745 92.7902 38.2336 92.6704 38.1614C92.5505 38.0891 92.358 38.053 92.1001 38.053H91.5044V38.0566Z'
                        fill='black'
                    />
                    <path
                        d='M98.6562 36.4602V39.6133H98.0133V38.2119H96.4224V39.6133H95.7795V36.4602H96.4224V37.7388H98.0133V36.4602H98.6562Z'
                        fill='black'
                    />
                    <path
                        d='M102.376 39.6133H101.159V36.4602H101.802V37.5835H102.321C102.775 37.5835 103.12 37.6593 103.349 37.811C103.578 37.9627 103.694 38.2228 103.694 38.5912C103.694 38.9235 103.574 39.1799 103.338 39.3497C103.102 39.5266 102.779 39.6133 102.376 39.6133ZM101.802 38.0566V39.1438H102.336C102.572 39.1438 102.746 39.1005 102.855 39.0102C102.964 38.9199 103.019 38.779 103.019 38.5803C103.019 38.3745 102.957 38.2336 102.837 38.1614C102.717 38.0891 102.532 38.053 102.289 38.053H101.802V38.0566ZM104.813 36.4602V39.6133H104.17V36.4602H104.813Z'
                        fill='black'
                    />
                    <path
                        d='M107.929 39.6132H107.315V36.4601H107.958V38.3274L107.937 38.7283H107.944L108.154 38.3816L109.604 36.4601H110.218V39.6132H109.575V37.6989L109.596 37.345H109.589L109.397 37.6592L107.929 39.6132ZM109.317 35.084L109.843 35.1345C109.833 35.4163 109.731 35.6221 109.535 35.7522C109.339 35.8858 109.088 35.9508 108.783 35.9508C108.478 35.9508 108.227 35.8822 108.031 35.7485C107.835 35.6149 107.729 35.409 107.722 35.1345L108.249 35.084C108.3 35.3802 108.478 35.5282 108.783 35.5282C109.088 35.5282 109.266 35.3802 109.317 35.084Z'
                        fill='black'
                    />
                    <path
                        d='M116.189 37.121H116.203C116.396 36.6804 116.81 36.4601 117.453 36.4601C117.929 36.4601 118.288 36.5865 118.532 36.8357C118.775 37.0849 118.895 37.4858 118.895 38.0348C118.895 38.5694 118.757 38.9739 118.481 39.2448C118.205 39.5157 117.816 39.6529 117.322 39.6529C116.727 39.6529 116.298 39.494 116.036 39.1798C115.771 38.8656 115.641 38.3707 115.641 37.6953C115.641 37.2727 115.666 36.9152 115.713 36.6226C115.76 36.33 115.837 36.0881 115.935 35.8894C116.033 35.6908 116.171 35.5355 116.345 35.4235C116.519 35.3115 116.716 35.2285 116.934 35.1743C117.152 35.1201 117.424 35.084 117.754 35.0623C117.998 35.0406 118.245 35.0009 118.499 34.9431V35.4307C118.332 35.4885 118.078 35.5318 117.733 35.5607C117.428 35.5968 117.191 35.6402 117.028 35.6835C116.865 35.7269 116.716 35.8063 116.581 35.9219C116.447 36.0375 116.356 36.1856 116.302 36.3698C116.247 36.5612 116.207 36.8104 116.189 37.121ZM116.349 38.0385C116.349 38.8042 116.676 39.187 117.326 39.187C117.914 39.187 118.208 38.8042 118.208 38.0385C118.208 37.3016 117.9 36.9332 117.279 36.9332C116.959 36.9332 116.723 37.038 116.574 37.2438C116.425 37.4497 116.349 37.717 116.349 38.0385Z'
                        fill='black'
                    />
                    <path
                        d='M121.082 40.8919L121.111 40.4151C121.22 40.4476 121.314 40.4657 121.39 40.4657C121.583 40.4657 121.728 40.4188 121.833 40.3285C121.935 40.2382 122.026 40.0756 122.099 39.8481L122.146 39.7109L120.787 36.4602H121.477L122.469 38.9813L123.297 36.4602H123.94L122.745 39.8336C122.622 40.1948 122.465 40.4693 122.277 40.6571C122.088 40.8414 121.823 40.9352 121.481 40.9352C121.35 40.9352 121.216 40.9208 121.082 40.8919Z'
                        fill='black'
                    />
                    <path
                        d='M127.616 36.9297V39.6133H126.973V36.9297H125.84V36.4602H128.738V36.9297H127.616Z'
                        fill='black'
                    />
                    <path
                        d='M131.426 39.6133H130.812V36.4602H131.455V38.3275L131.433 38.7284H131.441L131.651 38.3817L133.101 36.4602H133.714V39.6133H133.071V37.6991L133.093 37.3451H133.086L132.894 37.6593L131.426 39.6133Z'
                        fill='black'
                    />
                    <path
                        d='M136.86 36.4602V37.9194L138.207 36.4602H138.992L137.55 37.9447L139.155 39.6133H138.327L136.863 38.0386V39.6133H136.221V36.4602H136.86Z'
                        fill='black'
                    />
                    <path
                        d='M49.0803 11.8601C49.0694 11.954 48.9786 12.0118 48.8914 11.9793C47.5148 11.5025 45.9348 11.3219 44.2022 11.3219C40.0652 11.3219 37.9258 12.7847 37.9258 14.8832C37.9258 16.8986 39.4549 18.1411 43.454 19.2752C48.6481 20.738 50.5078 22.3669 50.5078 25.1011C50.5078 28.2759 47.9543 30.2371 42.7603 30.2371C40.719 30.2371 38.5941 29.8398 36.9415 29.121C36.8833 29.0957 36.8506 29.0343 36.8543 28.9729L36.9342 28.1458C36.9451 28.0483 37.0468 27.9905 37.1376 28.0302C38.7975 28.7779 40.8061 29.1608 42.8147 29.1608C47.177 29.1608 49.2583 27.4776 49.2583 25.13C49.2583 22.9484 47.424 21.5398 43.0109 20.3515C38.3435 19.109 36.6799 17.5343 36.6799 14.9121C36.6799 12.0407 39.484 10.2456 44.1804 10.2456C45.913 10.2456 47.6456 10.4551 49.0658 10.8993C49.1311 10.921 49.1747 10.986 49.1675 11.0547L49.0803 11.8601Z'
                        fill='black'
                    />
                    <path
                        d='M61.5969 10.5779H62.7483C62.8028 10.5779 62.8536 10.6104 62.879 10.6609L71.9886 29.7061C72.0358 29.8037 71.9632 29.912 71.8579 29.912H70.8481C70.7936 29.912 70.7391 29.8795 70.7174 29.8289L68.1566 24.4437C68.1312 24.3931 68.0804 24.3606 68.0259 24.3606H56.2938C56.2357 24.3606 56.1849 24.3931 56.1631 24.4437L53.6314 29.8289C53.606 29.8795 53.5552 29.912 53.5007 29.912H52.4909C52.3856 29.912 52.3129 29.8 52.3602 29.7061L61.4697 10.6609C61.4879 10.6104 61.5424 10.5779 61.5969 10.5779ZM56.9295 23.3096H67.3866C67.4919 23.3096 67.5646 23.1976 67.5174 23.1037L62.3015 12.0985C62.2507 11.9865 62.0908 11.9865 62.04 12.0985L56.7987 23.1037C56.7515 23.2012 56.8241 23.3096 56.9295 23.3096Z'
                        fill='black'
                    />
                    <path
                        d='M74.8109 10.7224C74.8109 10.6429 74.8763 10.5779 74.9562 10.5779H82.1443C86.5611 10.5779 89.3361 12.5933 89.3361 15.4936C89.3361 17.5668 88.2392 18.9284 86.4885 19.6436C86.3613 19.6941 86.3722 19.8784 86.503 19.9145C89.2054 20.6585 90.5311 22.2513 90.5311 24.6351C90.5311 27.9508 87.7815 29.912 82.3659 29.912H74.9562C74.8763 29.912 74.8109 29.847 74.8109 29.7675V10.7224ZM83.2812 19.3619C86.503 19.3619 88.1157 17.704 88.1157 15.5514C88.1157 13.1495 85.8383 11.6289 82.0317 11.6289H76.1766C76.0967 11.6289 76.0313 11.6939 76.0313 11.7734V19.2174C76.0313 19.2968 76.0967 19.3619 76.1766 19.3619H83.2812ZM83.3902 20.4093H76.1766C76.0967 20.4093 76.0313 20.4743 76.0313 20.5538V28.7165C76.0313 28.796 76.0967 28.861 76.1766 28.861H82.2533C86.8916 28.861 89.3071 27.3693 89.3071 24.6062C89.3071 22.0671 87.2803 20.4093 83.3902 20.4093Z'
                        fill='black'
                    />
                    <path
                        d='M103.113 30.2443C96.9746 30.2443 93.2262 25.9065 93.2262 20.2468C93.2262 14.5871 96.9746 10.2493 103.113 10.2493C109.252 10.2493 113 14.5871 113 20.2468C113 25.9065 109.252 30.2443 103.113 30.2443ZM103.113 11.3256C97.7265 11.3256 94.4757 15.053 94.4757 20.2468C94.4757 25.4406 97.7265 29.168 103.113 29.168C108.5 29.168 111.75 25.4406 111.75 20.2468C111.75 15.053 108.5 11.3256 103.113 11.3256Z'
                        fill='black'
                    />
                    <path
                        d='M132.552 28.005V10.7224C132.552 10.6429 132.618 10.5779 132.697 10.5779H133.627C133.707 10.5779 133.773 10.6429 133.773 10.7224V29.7675C133.773 29.847 133.707 29.912 133.627 29.912H132.4C132.356 29.912 132.312 29.8903 132.287 29.8578L118.285 12.3946C118.198 12.2863 118.027 12.3477 118.027 12.4849V29.7675C118.027 29.847 117.962 29.912 117.882 29.912H116.952C116.872 29.912 116.807 29.847 116.807 29.7675V10.7224C116.807 10.6429 116.872 10.5779 116.952 10.5779H118.179C118.223 10.5779 118.267 10.5996 118.292 10.6321L132.294 28.0952C132.381 28.2036 132.552 28.1422 132.552 28.005Z'
                        fill='black'
                    />
                    <path
                        d='M139.915 10.7224V29.7675C139.915 29.847 139.849 29.912 139.769 29.912H138.84C138.76 29.912 138.694 29.847 138.694 29.7675V10.7224C138.694 10.6429 138.76 10.5779 138.84 10.5779H139.769C139.849 10.5779 139.915 10.6429 139.915 10.7224Z'
                        fill='black'
                    />
                    <path
                        d='M156.401 11.8601C156.39 11.954 156.3 12.0118 156.212 11.9793C154.836 11.5025 153.256 11.3219 151.523 11.3219C147.386 11.3219 145.247 12.7847 145.247 14.8832C145.247 16.8986 146.776 18.1411 150.775 19.2752C155.969 20.738 157.829 22.3669 157.829 25.1011C157.829 28.2759 155.275 30.2371 150.081 30.2371C148.04 30.2371 145.915 29.8398 144.262 29.121C144.204 29.0957 144.172 29.0343 144.175 28.9729L144.255 28.1458C144.266 28.0483 144.368 27.9905 144.458 28.0302C146.118 28.7779 148.127 29.1608 150.136 29.1608C154.498 29.1608 156.579 27.4776 156.579 25.13C156.579 22.9484 154.745 21.5398 150.332 20.3515C145.664 19.109 144.001 17.5343 144.001 14.9121C144.001 12.0407 146.805 10.2456 151.501 10.2456C153.234 10.2456 154.966 10.4551 156.387 10.8993C156.452 10.921 156.496 10.986 156.488 11.0547L156.401 11.8601Z'
                        fill='black'
                    />
                    <path
                        d='M11.5261 11.5014C11.5261 12.0417 11.0944 12.4808 10.5598 12.4808C10.0267 12.4808 9.58426 12.0433 9.58426 11.5014V5.8619C9.58426 5.8619 9.97754 5.50846 9.97754 5.4384V4.90278C9.97754 4.83738 9.58426 4.47771 9.58426 4.47771V3.72255C9.57965 3.40492 9.29237 3.2025 8.96515 3.2025H6.75601C6.51481 3.2025 6.31971 3.47966 6.31971 3.72255V4.47771C6.31971 4.47771 5.92028 4.83271 5.92028 4.90278V5.4384C5.92028 5.50379 6.31971 5.8619 6.31971 5.8619V8.44501C6.35504 10.2621 6.92346 15.4111 9.09112 17.1659L9.69641 17.6517C12.5201 19.9094 14.9581 21.8588 14.9566 27.2741C14.9566 28.0308 14.849 38.9113 14.849 39.4749C14.849 41.0491 13.5862 42.3414 12.0331 42.3414H3.88628C2.32083 42.3414 1.04727 41.0631 1.04727 39.4749C1.04727 38.357 0.606362 26.8257 1.43748 23.7085C1.4682 23.5933 1.59418 23.1449 1.59418 23.1449C1.73705 22.6248 2.27013 22.3212 2.78171 22.466C3.29482 22.6108 3.59438 23.1495 3.45151 23.6696L3.29942 24.2161C2.54512 27.0468 2.97528 38.3181 2.97528 39.4749C2.97528 39.9841 3.38392 40.3858 3.88628 40.3858H12.0331C12.5216 40.3858 12.921 39.9701 12.921 39.4749C12.921 38.9097 13.0286 28.0292 13.0286 27.2741C13.0301 22.807 11.2281 21.3667 8.5012 19.1869L7.88669 18.6949C4.56684 16.009 4.39477 8.77198 4.39016 8.46525V6.68712C4.13207 6.32745 3.99074 5.89148 3.99074 5.43994V4.90434C3.99074 4.45124 4.13207 4.01216 4.39016 3.65249V3.64626C4.39016 2.32435 5.45019 1.25 6.75447 1.25H8.96361C10.2986 1.25 11.4124 2.31656 11.5031 3.65249C11.7642 4.01371 11.904 4.44813 11.904 4.90434V5.43994C11.904 5.89304 11.7596 6.32745 11.5031 6.68712L11.5261 11.5014Z'
                        fill='black'
                    />
                </svg>
            );
        case 'location':
            return (
                <svg
                    className={className}
                    width='800px'
                    height='800px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z'
                        stroke='#367639'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z'
                        stroke='#367639'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            );
        case 'search':
            return (
                <svg
                    width='20'
                    height='21'
                    viewBox='0 0 20 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g id='search'>
                        <path
                            id='Path 5'
                            d='M12.0114 12.7184L16.668 17.375'
                            stroke='#494949'
                            strokeWidth='2'
                            strokeLinecap='round'
                        />
                        <path
                            id='Oval'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M8.33203 14.041C11.0935 14.041 13.332 11.8024 13.332 9.04102C13.332 6.27959 11.0935 4.04102 8.33203 4.04102C5.57061 4.04102 3.33203 6.27959 3.33203 9.04102C3.33203 11.8024 5.57061 14.041 8.33203 14.041Z'
                            stroke='#494949'
                            strokeWidth='2'
                        />
                    </g>
                </svg>
            );
        case 'heart':
            return (
                <svg
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M15.63 4.16444C15.247 3.78119 14.7921 3.47717 14.2915 3.26975C13.7909 3.06233 13.2544 2.95557 12.7125 2.95557C12.1707 2.95557 11.6341 3.06233 11.1335 3.26975C10.6329 3.47717 10.1781 3.78119 9.79503 4.16444L9.00003 4.95944L8.20503 4.16444C7.43126 3.39067 6.3818 2.95597 5.28753 2.95597C4.19325 2.95597 3.1438 3.39067 2.37003 4.16444C1.59626 4.9382 1.16156 5.98766 1.16156 7.08194C1.16156 8.17621 1.59626 9.22567 2.37003 9.99944L3.16503 10.7944L9.00003 16.6294L14.835 10.7944L15.63 9.99944C16.0133 9.61637 16.3173 9.16155 16.5247 8.66095C16.7321 8.16036 16.8389 7.6238 16.8389 7.08194C16.8389 6.54007 16.7321 6.00351 16.5247 5.50292C16.3173 5.00232 16.0133 4.5475 15.63 4.16444V4.16444Z'
                        stroke='#494949'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            );
        case 'user':
            return (
                <svg
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M15 16.457V14.957C15 14.1614 14.6839 13.3983 14.1213 12.8357C13.5587 12.2731 12.7956 11.957 12 11.957H6C5.20435 11.957 4.44129 12.2731 3.87868 12.8357C3.31607 13.3983 3 14.1614 3 14.957V16.457'
                        stroke='#494949'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M9 8.95703C10.6569 8.95703 12 7.61389 12 5.95703C12 4.30018 10.6569 2.95703 9 2.95703C7.34315 2.95703 6 4.30018 6 5.95703C6 7.61389 7.34315 8.95703 9 8.95703Z'
                        stroke='#494949'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            );
        case 'cart':
            return (
                <svg
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g clipPath='url(#clip0_1_593)'>
                        <path
                            d='M6.75 17.207C7.16421 17.207 7.5 16.8712 7.5 16.457C7.5 16.0428 7.16421 15.707 6.75 15.707C6.33579 15.707 6 16.0428 6 16.457C6 16.8712 6.33579 17.207 6.75 17.207Z'
                            stroke='#494949'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M15 17.207C15.4142 17.207 15.75 16.8712 15.75 16.457C15.75 16.0428 15.4142 15.707 15 15.707C14.5858 15.707 14.25 16.0428 14.25 16.457C14.25 16.8712 14.5858 17.207 15 17.207Z'
                            stroke='#494949'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M0.75 1.45703H3.75L5.76 11.4995C5.82858 11.8448 6.01643 12.155 6.29066 12.3758C6.56489 12.5965 6.90802 12.7138 7.26 12.707H14.55C14.902 12.7138 15.2451 12.5965 15.5193 12.3758C15.7936 12.155 15.9814 11.8448 16.05 11.4995L17.25 5.20703H4.5'
                            stroke='#494949'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_1_593'>
                            <rect width='18' height='18' fill='white' transform='translate(0 0.707031)'/>
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'earth-globe':
            return (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.39961 13.2214H15.5996M4.39961 6.81874H15.5996M3.59961 10.0201H16.3996M9.99961 16.4227C9.99961 16.4227 6.39961 14.822 6.39961 10.0201C6.39961 5.21809 9.99961 3.61743 9.99961 3.61743M9.99961 3.61743C9.99961 3.61743 13.5996 5.21809 13.5996 10.0201C13.5996 14.822 9.99961 16.4227 9.99961 16.4227M9.99961 3.61743V16.4227M16.3996 10.0201C16.3996 13.5561 13.5342 16.4227 9.99961 16.4227C6.46499 16.4227 3.59961 13.5561 3.59961 10.0201C3.59961 6.48398 6.46499 3.61743 9.99961 3.61743C13.5342 3.61743 16.3996 6.48398 16.3996 10.0201Z"
                        stroke="white" strokeWidth="1.00323"/>
                </svg>
            );
        case "ru":
            return (
                <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_98_1495" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="3" y="3"
                          width="18" height="13">
                        <rect x="3.63965" y="3.09448" width="16.7205" height="12.5404" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_98_1495)">
                        <mask id="mask1_98_1495" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="3" y="3"
                              width="18" height="13">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.63965 3.09448V15.6349H20.3602V3.09448H3.63965Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask1_98_1495)">
                            <rect x="3.63965" y="7.27466" width="16.7205" height="4.18013" fill="#132EB5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.63965 3.09448V7.27461H20.3602V3.09448H3.63965Z" fill="#F7FCFF"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.63965 11.4547V15.6348H20.3602V11.4547H3.63965Z" fill="#C51918"/>
                        </g>
                    </g>
                </svg>

            );
        case 'verified':
            return (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66699 11.2122L8.75033 13.2988L13.3337 8.70837" stroke="white" strokeWidth="2.05406"
                          strokeLinecap="round"/>
                    <path
                        d="M10.0003 19.1412C10.9622 19.1412 11.7972 18.5972 12.2153 17.7996C12.4113 17.4256 12.9773 17.1914 13.3805 17.3169C14.239 17.5843 15.213 17.3776 15.8929 16.6967C16.5735 16.015 16.7796 15.038 16.5113 14.1775C16.3857 13.7748 16.6198 13.21 16.9933 13.0138C17.7901 12.5952 18.3337 11.7587 18.3337 10.795C18.3337 9.83136 17.7901 8.99485 16.9933 8.57626C16.6199 8.38008 16.3857 7.81526 16.5113 7.41257C16.7797 6.55204 16.5735 5.57508 15.8929 4.89339C15.213 4.21248 14.239 4.00573 13.3805 4.27315C12.9774 4.39872 12.4113 4.16445 12.2153 3.79047C11.7972 2.99288 10.9622 2.44885 10.0003 2.44885C9.03847 2.44885 8.20349 2.99288 7.7854 3.79047C7.58936 4.16444 7.02331 4.3987 6.62018 4.27313C5.76168 4.00571 4.78765 4.21245 4.10777 4.89337C3.42714 5.57506 3.22101 6.55201 3.48938 7.41254C3.61497 7.81524 3.38081 8.38007 3.00737 8.57625C2.21056 8.99484 1.66699 9.83136 1.66699 10.795C1.66699 11.7587 2.21056 12.5952 3.00736 13.0138C3.3808 13.21 3.61495 13.7748 3.48936 14.1775C3.22099 15.038 3.42712 16.015 4.10775 16.6967C4.78762 17.3776 5.76165 17.5843 6.62015 17.3169C7.02329 17.1913 7.58936 17.4256 7.78539 17.7996C8.20348 18.5972 9.03847 19.1412 10.0003 19.1412Z"
                        stroke="white" strokeWidth="2.05406" strokeLinecap="round"/>
                </svg>

            );
        case 'pocket-knife':
            return (
                <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_98_1506)">
                        <path
                            d="M5.41406 15.931L5.9052 15.4969C6.39635 15.0628 5.49474 14.1168 5.98588 13.6827C6.47702 13.2485 7.37863 14.1945 7.86977 13.7604C8.36091 13.3262 7.45931 12.3803 7.95045 11.9461C8.44159 11.512 9.3432 12.458 9.83434 12.0238C10.3255 11.5897 9.42387 10.6437 9.91501 10.2096"
                            stroke="white" strokeWidth="1.9978" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 4.63428V4.62787" stroke="white" strokeWidth="1.9978" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M16 12.3376V12.3312" stroke="white" strokeWidth="1.9978" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M9.88685 2.81742C9.63909 2.57882 9.34495 2.38955 9.02124 2.26043C8.69752 2.1313 8.35057 2.06484 8.00018 2.06484C7.64979 2.06484 7.30284 2.1313 6.97912 2.26043C6.65541 2.38955 6.36127 2.57882 6.11351 2.81742C5.86575 3.05602 5.66922 3.33927 5.53513 3.65102C5.40104 3.96276 5.33203 4.29689 5.33203 4.63432C5.33203 4.97175 5.40104 5.30587 5.53513 5.61762C5.66922 5.92936 5.86575 6.21262 6.11351 6.45122L14.1135 14.1554C14.6139 14.6372 15.2925 14.908 16.0002 14.908C16.3506 14.908 16.6975 14.8415 17.0212 14.7124C17.345 14.5832 17.6391 14.394 17.8868 14.1554C18.1346 13.9168 18.3311 13.6335 18.4652 13.3218C18.5993 13.01 18.6683 12.6759 18.6683 12.3385C18.6683 11.657 18.3872 11.0035 17.8868 10.5216L9.88685 2.81742Z"
                            stroke="white" strokeWidth="1.9978" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M1.70312 19.2721L2.19427 18.838C2.68541 18.4038 1.7838 17.4579 2.27494 17.0237C2.76608 16.5896 3.66769 17.5356 4.15883 17.1014C4.64998 16.6673 3.74837 15.7213 4.23951 15.2872C4.73065 14.8531 5.63226 15.799 6.1234 15.3649C6.61454 14.9308 5.71293 13.9848 6.20408 13.5507"
                            stroke="white" strokeWidth="1.9978" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_98_1506">
                            <rect width="23.9712" height="20" fill="white" transform="matrix(0 -1 1 0 0 24.7532)"/>
                        </clipPath>
                    </defs>
                </svg>

            );
        case "shopping-basket":
            return (
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_98_1647)">
                        <path className={className}
                              d="M20.0937 7.52027H16.6976L13.1297 1.58035C12.9527 1.28528 12.5687 1.18895 12.2721 1.36636C11.9761 1.54378 11.8803 1.92723 12.0579 2.22293L15.2399 7.52027H4.94764L8.12963 2.22288C8.30725 1.92719 8.21144 1.54374 7.91541 1.36632C7.61816 1.1889 7.23549 1.28524 7.05787 1.5803L3.48993 7.52023H0.09375V8.76883H1.45026L3.03808 17.2291C3.20408 18.115 3.97923 18.7575 4.88136 18.7575H15.3062C16.2083 18.7575 16.9834 18.115 17.1488 17.2297L18.7372 8.76883H20.0938C20.0937 8.76883 20.0937 7.52027 20.0937 7.52027ZM15.9202 16.9999C15.8652 17.295 15.607 17.509 15.3061 17.509H4.88136C4.58046 17.509 4.3223 17.295 4.26675 16.9993L2.72164 8.76883H17.4659L15.9202 16.9999Z"
                              fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_98_1647">
                            <rect width="20" height="19.9774" fill="white" transform="translate(0.09375 0.0273438)"/>
                        </clipPath>
                    </defs>
                </svg>
            );
        case "card-tag":
            return (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.591 8.97129L13.5876 8.97466M12.7253 4.74473L9.41252 7.58422C9.11882 7.83596 8.94979 8.20347 8.94979 8.5903L8.94979 18.5816C8.94979 19.3134 9.54305 19.9067 10.2749 19.9067L16.9003 19.9067C17.6322 19.9067 18.2254 19.3134 18.2254 18.5816V8.5903C18.2254 8.20347 18.0564 7.83596 17.7627 7.58422L14.45 4.74473C13.9537 4.31939 13.2215 4.31939 12.7253 4.74473Z"
                        stroke="#494949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case "error":
            return (
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91016 12.0938V8.34375" stroke="#494949" strokeWidth="1.81818" strokeLinecap="round"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.91016 5.34375C9.49594 5.34375 9.16016 5.67954 9.16016 6.09375C9.16016 6.50796 9.49594 6.84375 9.91016 6.84375C10.3244 6.84375 10.6602 6.50796 10.6602 6.09375C10.6602 5.67954 10.3244 5.34375 9.91016 5.34375Z"
                          fill="#494949"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.91016 1.59375C5.76802 1.59375 2.41016 4.95161 2.41016 9.09375C2.41016 13.2359 5.76802 16.5938 9.91016 16.5938C14.0523 16.5938 17.4102 13.2359 17.4102 9.09375C17.4102 4.95161 14.0523 1.59375 9.91016 1.59375Z"
                          stroke="#494949" strokeWidth="1.81818"/>
                </svg>
            );
        case "favorites":
            return (
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_98_1632)">
                        <path
                            d="M16.3562 3.73096C15.9731 3.34772 15.5183 3.0437 15.0177 2.83628C14.5171 2.62886 13.9805 2.52209 13.4387 2.52209C12.8968 2.52209 12.3602 2.62886 11.8596 2.83628C11.3591 3.0437 10.9042 3.34772 10.5212 3.73096L9.72616 4.52596L8.93116 3.73096C8.15739 2.95719 7.10794 2.5225 6.01366 2.5225C4.91939 2.5225 3.86993 2.95719 3.09616 3.73096C2.32239 4.50473 1.8877 5.55419 1.8877 6.64846C1.8877 7.74274 2.32239 8.79219 3.09616 9.56596L3.89116 10.361L9.72616 16.196L15.5612 10.361L16.3562 9.56596C16.7394 9.1829 17.0434 8.72807 17.2508 8.22748C17.4583 7.72689 17.565 7.19033 17.565 6.64846C17.565 6.1066 17.4583 5.57004 17.2508 5.06945C17.0434 4.56885 16.7394 4.11403 16.3562 3.73096Z"
                            fill="#790018" stroke="#25282B" strokeWidth="1.81818" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_98_1632">
                            <rect width="18" height="18" fill="white" transform="translate(0.726562 0.273438)"/>
                        </clipPath>
                    </defs>
                </svg>
            );
        case "slider-arrow":
            return (
                <svg className={className} width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 16.5L9 9L1.5 1.5" stroke="#367639" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            );
        case "dashboard":
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <rect x="1.5" y="1.5" width="15" height="15" stroke={color} strokeLinejoin="round"/>
                    <path d="M8.25 5.25H12.75" stroke="#494949" strokeLinecap="round"/>
                    <path d="M8.25 9H12.75" stroke="#494949" strokeLinecap="round"/>
                    <path d="M8.25 12.75H12.75" stroke="#494949" strokeLinecap="round"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.25 6C5.66421 6 6 5.66421 6 5.25C6 4.83579 5.66421 4.5 5.25 4.5C4.83579 4.5 4.5 4.83579 4.5 5.25C4.5 5.66421 4.83579 6 5.25 6Z"
                          fill={color}/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.25 9.75C5.66421 9.75 6 9.41421 6 9C6 8.58579 5.66421 8.25 5.25 8.25C4.83579 8.25 4.5 8.58579 4.5 9C4.5 9.41421 4.83579 9.75 5.25 9.75Z"
                          fill={color}/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.25 13.5C5.66421 13.5 6 13.1642 6 12.75C6 12.3358 5.66421 12 5.25 12C4.83579 12 4.5 12.3358 4.5 12.75C4.5 13.1642 4.83579 13.5 5.25 13.5Z"
                          fill={color}/>
                </svg>
            );
        case "grid":
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5.25" height="5.25" transform="matrix(-1 0 0 1 15.75 2.25)" stroke={color}
                          strokeLinejoin="round"/>
                    <rect width="5.25" height="5.25" transform="matrix(-1 0 0 1 7.5 2.25)" stroke={color}
                          strokeLinejoin="round"/>
                    <rect width="5.25" height="5.25" transform="matrix(-1 0 0 1 15.75 10.5)" stroke={color}
                          strokeLinejoin="round"/>
                    <rect width="5.25" height="5.25" transform="matrix(-1 0 0 1 7.5 10.5)" stroke={color}
                          strokeLinejoin="round"/>
                </svg>
            );
        case "sort":
            return (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.125 3.4375L11.5625 1M11.5625 1L14 3.4375M11.5625 1L11.5625 14M5.875 11.5625L3.4375 14M3.4375 14L1 11.5625M3.4375 14L3.4375 1"
                        stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            );
        case "arrow-vertical":
            return (
                <svg className={className} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L6 7L1 1" stroke={color} strokeWidth="1.2"/>
                </svg>
            );
        //   return <></>;
        // case '':
        //   return <></>;
        // case '':
        //   return <></>;
        // case '':
        //   return <></>;
    }
    return <div className=''>SvgSprite</div>;
}