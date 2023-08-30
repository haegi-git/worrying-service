import Layout from "./components/Layout";

import DetailPage from "./pages/detail/DetailPage";
import EditPage from "./pages/edit/EditPage";
import FreePage from "./pages/free/FreePage";
import JoinPage from "./pages/join/JoinPage";
import LoginPage from "./pages/login/LoginPage";
import SecretPage from "./pages/secret/SecretPage";
import WritePage from "./pages/write/WritePage";
import AnonymousPage from "./pages/anonymous/AnonymousPage";
import HomePage from "./pages/home/HomePage";
import MyPage from "./pages/mypage/MyPage";

const routes = [
    {
        element: <Layout/>,
        children: [

            {path: '/', element: <HomePage/>},

            {path: '/anonymous', element: <AnonymousPage/>},
            {path: '/secret', element: <SecretPage/>},
            {path: '/free', element: <FreePage/>},
            {path: '/write', element: <WritePage/>},
            {path: '/mypage', element: <MyPage/>},

            {path: '/login', element: <LoginPage/>},
            {path: '/join', element: <JoinPage/>},

            {path: '/:category/:id', element: <DetailPage/>},
            {path: '/edit/:category/:id', element: <EditPage/>},
        ]
    }
]

export default routes