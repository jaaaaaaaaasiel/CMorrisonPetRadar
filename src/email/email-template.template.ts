
import { FoundPet } from 'src/core/db/entities/found-pet.entity';
import { LostPet } from 'src/core/db/entities/lost-pet.entity';
import { generateMapBoxImageTwoPoints } from 'src/core/utils/utils';

export const generateEmailTemplate = (foundPet: FoundPet, lostPet: LostPet): string => {

    const foundDate = new Date(foundPet.found_date).toLocaleDateString('es-MX', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const mapImageUrl = generateMapBoxImageTwoPoints(
        (lostPet as any).lon, (lostPet as any).lat,
        foundPet.location.coordinates[0], foundPet.location.coordinates[1]
    );

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#f4f6f0;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f0;padding:32px 0;">
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

                        <!-- Header -->
                        <tr>
                            <td style="background-color:#82E65B;padding:32px 40px;">
                                <p style="margin:0 0 8px;color:#75916A;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                                    PetRadar — Posible coincidencia
                                </p>
                                <h1 style="margin:0;color:#3a4f35;font-size:24px;font-weight:700;line-height:1.3;">
                                    ¡Se encontró una mascota cerca de donde desapareció la tuya!
                                </h1>
                            </td>
                        </tr>

                        <!-- Datos de la mascota encontrada -->
                        <tr>
                            <td style="padding:32px 40px 0;">
                                <h2 style="margin:0 0 16px;font-size:13px;font-weight:600;color:#75916A;text-transform:uppercase;letter-spacing:0.5px;">
                                    Mascota encontrada
                                </h2>
                                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7faf4;border-radius:12px;">
                                    <tr>
                                        <td style="padding:20px 24px;">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td width="50%" style="padding-bottom:12px;">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Especie</span><br/>
                                                        <span style="font-size:15px;color:#66665C;font-weight:600;">${foundPet.species}</span>
                                                    </td>
                                                    <td width="50%" style="padding-bottom:12px;">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Raza</span><br/>
                                                        <span style="font-size:15px;color:#66665C;font-weight:600;">${foundPet.breed ?? 'No identificada'}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style="padding-bottom:12px;">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Color</span><br/>
                                                        <span style="font-size:15px;color:#66665C;font-weight:600;">${foundPet.color}</span>
                                                    </td>
                                                    <td width="50%" style="padding-bottom:12px;">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Tamaño</span><br/>
                                                        <span style="font-size:15px;color:#66665C;font-weight:600;">${foundPet.size}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Descripción</span><br/>
                                                        <span style="font-size:14px;color:#66665C;line-height:1.6;">${foundPet.description}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Datos de contacto del finder -->
                        <tr>
                            <td style="padding:24px 40px 0;">
                                <h2 style="margin:0 0 16px;font-size:13px;font-weight:600;color:#75916A;text-transform:uppercase;letter-spacing:0.5px;">
                                    Contacto de quien la encontró
                                </h2>
                                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7faf4;border-radius:12px;">
                                    <tr>
                                        <td style="padding:20px 24px;">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="padding-bottom:12px;">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Nombre</span><br/>
                                                        <span style="font-size:15px;color:#66665C;font-weight:600;">${foundPet.finder_name}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style="padding-bottom:12px;">
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Correo</span><br/>
                                                        <span style="font-size:14px;color:#66665C;">${foundPet.finder_email}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span style="font-size:11px;color:#9ca3af;font-weight:500;text-transform:uppercase;">Teléfono</span><br/>
                                                        <span style="font-size:15px;color:#66665C;font-weight:600;">${foundPet.finder_phone}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Mapa -->
                        <tr>
                            <td style="padding:24px 40px;">
                                <h2 style="margin:0 0 12px;font-size:13px;font-weight:600;color:#75916A;text-transform:uppercase;letter-spacing:0.5px;">
                                    Ubicaciones
                                </h2>
                                <div style="display:flex;gap:12px;margin-bottom:12px;">
                                    <span style="font-size:12px;color:#E6605C;font-weight:600;">● Donde se perdió</span>
                                    <span style="font-size:12px;color:#82E65B;font-weight:600;">● Donde fue encontrada</span>
                                </div>
                                <img src="${mapImageUrl}" width="520" style="width:100%;border-radius:12px;display:block;" alt="Mapa de ubicaciones"/>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="padding:0 40px 32px;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e7eb;padding-top:20px;">
                                    <tr>
                                        <td>
                                            <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.5;">
                                                Este correo fue generado automáticamente por PetRadar.
                                            </p>
                                            <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">
                                                Encontrado el ${foundDate}
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
}