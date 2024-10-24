<form action="{{ route('login') }}" method="POST">
    @csrf
    <div>
        <label for="correo">Correo:</label>
        <input type="email" name="correo" required>
    </div>
    <div>
        <label for="password">Contraseña:</label>
        <input type="password" name="password" required>
    </div>
    <button type="submit">Iniciar sesión</button>

    @if ($errors->any())
        <div style="color: red;">
            <p>{{ $errors->first() }}</p>
        </div>
    @endif
</form>
