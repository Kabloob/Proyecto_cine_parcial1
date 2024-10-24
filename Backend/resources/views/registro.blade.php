<form action="{{ route('registro.store') }}" method="POST">
    @csrf
    <div>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required>
    </div>
    <div>
        <label for="apellido">Apellido:</label>
        <input type="text" name="apellido" required>
    </div>
    <div>
        <label for="correo">Correo:</label>
        <input type="email" name="correo" required>
    </div>
    <div>
        <label for="password">Contraseña:</label>
        <input type="password" name="password" required>
    </div>
    <div>
        <label for="cedula">Cédula:</label>
        <input type="text" name="cedula" required>
    </div>
    <div>
        <label for="telefono">Teléfono:</label>
        <input type="text" name="telefono" required>
    </div>
    <button type="submit">Registrarse</button>
</form>

@if(session('success'))
    <p>{{ session('success') }}</p>
@endif
