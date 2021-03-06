class ConfineInScreen {
    static ConfineCubeInScreen(cube: Cube) {
        if (cube.position.x - cube.width / 2 <= 0)
            cube.velocity.x = Math.abs(cube.velocity.x)
        if (cube.position.x + cube.width / 2 >= window.innerWidth)
            cube.velocity.x = -Math.abs(cube.velocity.x);
        if (cube.position.y - cube.height / 2 <= 0)
            cube.velocity.y = Math.abs(cube.velocity.y);
        if (cube.position.y + cube.height / 2 >= window.innerHeight)
            cube.velocity.y = -Math.abs(cube.velocity.y);
    }

    static ConfineCircleInScreen(circle: Circle) {
        if (circle.position.x - circle.radius <= 0)
            circle.velocity.x = Math.abs(circle.velocity.x);
        if (circle.position.x + circle.radius >= window.innerWidth)
            circle.velocity.x = -Math.abs(circle.velocity.x);
        if (circle.position.y - circle.radius <= 0)
            circle.velocity.y = Math.abs(circle.velocity.y);
        if (circle.position.y + circle.radius >= window.innerHeight)
            circle.velocity.y = -Math.abs(circle.velocity.y);
    }
}