function AboutPage() {
    return (
        <div>
            <h1 className='subtitle'>О сайте:</h1>
            <hr width='80%'/>
            <div className='about'>
                <p>Данный сайт является фуллстек-приложением с рецептами блюд,
                    которое использует Django Rest Framework, автодокументацию
                    OpenAPI+Swagger и react-router.
                    Рецепты распределены по категориям и отображены в клиенте и
                    в API.
                    У каждого блюда и каждой категории есть своя
                    страница: с главной страницы можно перейти на любую из
                    категорий, а из категории — на любой рецепт этой
                    категории</p>
            </div>
        </div>
    );
}

export default AboutPage;

