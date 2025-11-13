import { useEffect, useState } from "react";
import placeholderAvatar from "../../assets/images/placeholder-avatar.jpg";

const styles = {
    input: {
        display: "none"
    }
}

const defaultAvatar = placeholderAvatar;

function EditAvatar() {
    const [avatarUrl, setAvatarUrl] = useState("");

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        // console.log(URL.createObjectURL(file));
        setAvatarUrl(file ? URL.createObjectURL(file) : "");
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatarUrl);
        }
    }, [avatarUrl])

    return (
        <>
            <main className="flex flex-col items-center">
                <h1 className="text-lg py-1.5 font-medium">Edit Avatar </h1>
                <label className="group cursor-pointer relative rounded-r-full rounded-l-full overflow-hidden">
                    <div className="absolute inset-0 items-center justify-center
                        font-semibold bg-[rgba(0,0,0,0.3)] text-lg hidden group-hover:flex text-white">Click để chọn ảnh</div>
                    <input type="file" style={styles.input} onChange={handleChangeAvatar} />
                    <img src={avatarUrl || defaultAvatar} alt="" accept="image/*"
                        className="size-[150px] object-cover" />
                </label>
            </main>
        </>
    )
}

export default EditAvatar;