def generate_docker_compose(num_containers=12):
    lines = []
    lines.append("services:")
    for i in range(1, num_containers + 1):
        user_id = f"pkuser{i:02d}"
        hostname = f"PK{i:02d}"
        port = f"22{i:02d}:22"
        volume = f"D:/data/container_ssh/{user_id}:/home/pkuser/data"

        lines.append(f"  {user_id}:")
        lines.append(f"    image: pkteam:1.0")
        lines.append(f"    container_name: {user_id}")
        lines.append(f"    hostname: {hostname}")
        lines.append(f"    ports:")
        lines.append(f"      - \"{port}\"")
        lines.append(f"    restart: unless-stopped")
        lines.append(f"    volumes:")
        lines.append(f"      - {volume}")

    with open("docker-compose.yml", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print("docker-compose.yml 파일이 생성되었습니다.")

if __name__ == "__main__":
    generate_docker_compose()